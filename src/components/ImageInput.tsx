import React from 'react';
import { Box, Button, IconButton } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CloseIcon from '@mui/icons-material/Close';

interface ImageInputProps {
    previewUrls: string[];
    onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onRemoveImage: (index: number) => void;
}

const ImageInput = ({ previewUrls, onImageChange, onRemoveImage }: ImageInputProps) => {
    return (
        <>
            <Box sx={{ mb: 2 }}>
                <input
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="image-upload"
                    multiple
                    type="file"
                    onChange={onImageChange}
                />
                <label htmlFor="image-upload">
                    <Button
                        variant="outlined"
                        component="span"
                        startIcon={<AddPhotoAlternateIcon />}
                    >
                        Add Images
                    </Button>
                </label>
            </Box>

            {previewUrls.length > 0 && (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    {previewUrls.map((url, index) => (
                        <Box key={index} sx={{ position: 'relative' }}>
                            <img
                                src={url}
                                alt={`Preview ${index}`}
                                style={{ width: 100, height: 100, objectFit: 'cover' }}
                            />
                            <IconButton
                                size="small"
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                                }}
                                onClick={() => onRemoveImage(index)}
                            >
                                <CloseIcon fontSize="small" />
                            </IconButton>
                        </Box>
                    ))}
                </Box>
            )}
        </>
    );
};

export default ImageInput;