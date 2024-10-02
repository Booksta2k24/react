import * as Yup from "yup";


export const addPostValidation = Yup.object({
    title: Yup.string().min(5, "Minimum 5 characters required").required("Title is required"),
    description: Yup.string().min(5, "Minimum 5 characters required").required("Description is required"),
})