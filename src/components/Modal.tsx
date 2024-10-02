import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import PostForm from './PostForm';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    borderRadius: '15px',
    p: 4,
    maxHeight: '90vh',
    overflowY: 'auto'
};

interface BasicModalProps {
    open: boolean;
    handleClose: () => void;
    onSubmit: (postData: PostFormData) => void;
}

interface PostFormData {
    title: string;
    description: string;
    content?: string;
    images: File[];
}

export default function CustomModal({ open, handleClose }: BasicModalProps) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
        >
            <Box sx={style}>
                <Button
                    onClick={handleClose}
                    sx={{
                        position: "absolute",
                        top: 20,
                        right: 20,
                        height: '40px',
                        minWidth: '40px',
                        fontSize: '20px',
                        ":hover": {
                            backgroundColor: "#f1f1f1",
                            borderRadius: "50%",
                        }
                    }}
                >
                    <CloseIcon />
                </Button>

                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
                    Create New Post
                </Typography>

                <PostForm />
            </Box>
        </Modal>
    );
}
