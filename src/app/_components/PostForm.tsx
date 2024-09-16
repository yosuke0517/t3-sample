"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createPostSchema, type CreatePostInput } from "~/schema/post";
import { type Post } from "@prisma/client";
import {
  TextField,
  Button,
  Box,
  FormHelperText,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Grid2,
} from "@mui/material";
import { revalidateTag } from "next/cache";
import { fetchPosts } from "~/app/_hooks/infra/fetchPosts"; // サーバサイドキャッシュの無効化に利用

type PostFormProps = {
  // createPostはserver actionのため props で受け取る
  createPost: (data: CreatePostInput) => Promise<Post>;
};

const PostForm: React.FC<PostFormProps> = ({ createPost }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreatePostInput>({
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      name: "",
      status: "",
    },
  });

  const onSubmit = async (data: CreatePostInput) => {
    try {
      const createdPost = await createPost(data);
      if (createdPost) {
        reset({ name: "", status: "" });
        // Post一覧の再取得を手動で実行
        await fetchPosts();
      }
    } catch (error) {
      console.error("Failed to create post:", error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} mt={4}>
      <Grid2 container spacing={3} alignItems="center">
        <Grid2 size={4}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                id="name"
                label="Post 投稿しましょう"
                variant="outlined"
                fullWidth
                error={!!errors.name}
                helperText={errors.name ? errors.name.message : ""}
                placeholder="入力してください"
              />
            )}
          />
        </Grid2>
        <Grid2 size={4}>
          <Controller
            name="status"
            control={control}
            render={({ field }) => (
              <FormControl variant="outlined" fullWidth error={!!errors.status}>
                <InputLabel id="status-label">Status</InputLabel>
                <Select
                  {...field}
                  labelId="status-label"
                  label="Status"
                  defaultValue=""
                >
                  <MenuItem value="">選択してください</MenuItem>
                  <MenuItem value="DRAFT">DRAFT</MenuItem>
                  <MenuItem value="PUBLISHED">PUBLISHED</MenuItem>
                </Select>
                {errors.status && (
                  <FormHelperText error>
                    {errors.status?.message}
                  </FormHelperText>
                )}
              </FormControl>
            )}
          />
        </Grid2>
        <Grid2 size={4}>
          <Button
            type="submit"
            variant="contained"
            color="success"
            disabled={false} // 状態を手動で管理するため、ここは簡略化
          >
            Create Post
          </Button>
        </Grid2>
      </Grid2>
      {errors.name && (
        <FormHelperText error>{errors.name.message}</FormHelperText>
      )}
    </Box>
  );
};

export default PostForm;
