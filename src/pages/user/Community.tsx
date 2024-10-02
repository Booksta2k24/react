import { Button, Stack } from "@mui/material"
import { Navbar, PostCard } from "../../components";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import CustomModal from "../../components/Modal";

function Community() {
    const [ openModal, setOpenModal ] = useState(false);

    function handleModalClose() {
        setOpenModal(false);
    }

    return (
        <div className="flex flex-col gap-10">
            <Button
                variant="contained"
                onClick={() => setOpenModal(true)}
                href="#"
                sx={{
                    position: "fixed",
                    bottom: "50px",
                    right: "50px",
                    borderRadius: "50%", 
                    minWidth: "50px",      
                    height: "50px",
                    backgroundImage: 'linear-gradient(to right top, #5841ee, #5c41ee, #6041ee, #6341ee, #6741ee, #6e41ee, #7541ee, #7c41ee, #8741ee, #9241ee, #9c41ee, #a541ee)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 0, 
                }}
            >
                <AddIcon
                    sx={{
                        fontSize: "40px",
                        color: "#fff"
                    }}
                />
            </Button>

            
            <CustomModal open={openModal} handleClose={handleModalClose} onSubmit={() => {}}/>

            <Navbar />

            <Stack 
                alignItems={"center"}
                gap={'50px'}
                paddingTop={'50px'}
            >
                
                <PostCard />
                <PostCard />
                <PostCard />
            </Stack>
        </div>
    )
}

export default Community