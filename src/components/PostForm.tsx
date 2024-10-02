import React, { useState } from 'react';
import { Button } from '@mui/material';
import InputField from './InputField';
import ImageInput from './ImageInput';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { addPostValidation } from '../utils/validation/addPost';
import { addPost } from '../api/community/postApi';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';

interface PostFormData {
    title: string;
    description: string;
    content?: string;
    images: File[];
}

const PostForm = () => {
    const [formData, setFormData] = useState<PostFormData>({
        title: '',
        description: '',
        content: '',
        images: []
    });

    const [previewUrls, setPreviewUrls] = useState<string[]>([]);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        setFormData((prev) => ({
            ...prev,
            images: [...prev.images, ...files]
        }));

        files.forEach((file) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrls((prev) => [...prev, reader.result as string]);
            };
            reader.readAsDataURL(file);
        });
    };

    const handleRemoveImage = (index: number) => {
        setFormData((prev) => ({
            ...prev,
            images: prev.images.filter((_, i) => i !== index)
        }));
        setPreviewUrls((prev) => prev.filter((_, i) => i !== index));
    };

    const mutationOptions: UseMutationOptions<PostFormData, Error, FormData> = {
        onSuccess: (data: PostFormData) => {
            alert("Post added successfully..")
            console.log("post added successful:", data);
        },
        onError: (error: Error) => {
            console.error("post adding failed:", error);
            alert("post adding failed. Please check your credentials.");
        }
    };

    const mutation = useMutation<PostFormData, Error, FormData>({
        mutationFn: addPost,
        ...mutationOptions
    });

    const handleSubmit = async(values: PostFormData) => {
        const formValues = new FormData();

        formValues.append('title', values.title);
        formValues.append('description', values.description);
        formValues.append('content', values.content || '');
        formData.images.forEach((image) => {
            formValues.append('post-images', image); 
        });
        mutation.mutate(formValues)
    };    

    return (
        <Formik
            initialValues={formData}
            validationSchema={addPostValidation}
            onSubmit={handleSubmit}
        >
            {({ handleChange, handleSubmit, values }) => (
                <Form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <InputField
                            label="Title"
                            type="text"
                            id="title"
                            name="title"
                            value={values.title}
                            onChange={handleChange}
                            placeholder="Enter title"
                        />
                        <ErrorMessage name="title" component="div" className="text-red-500 text-sm" />

                        <InputField
                            label="Description"
                            type="text"
                            id="description"
                            name="description"
                            value={values.description}
                            onChange={handleChange}
                            placeholder="Enter description"
                        />
                        <ErrorMessage name="description" component="div" className="text-red-500 text-sm" />

                        <div>
                            <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                                Content
                            </label>
                            <Field
                                as="textarea"
                                id="content"
                                name="content"
                                rows={4}
                                className="w-full px-3 py-2 border border-gray-200 shadow-xs focus:outline-none focus:ring-secondary focus:border-secondary text-sm rounded-lg"
                                placeholder="Enter content"
                            />
                            <ErrorMessage name="content" component="div" className="text-red-500 text-sm" />
                        </div>

                        <ImageInput
                            previewUrls={previewUrls}
                            onImageChange={handleImageChange}
                            onRemoveImage={handleRemoveImage}
                        />

                        <Button type="submit" variant="contained" fullWidth>
                            Create Post
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default PostForm;
