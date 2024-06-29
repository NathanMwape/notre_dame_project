
// import { GeneratePassword } from "js-generate-password";
import { supabase } from "./supabaise-config/supabaiseClient";


export const createFile = async (bucket, file) => {
    const date = new Date();
    const { data, error } = await supabase
        .storage
        .from(bucket)
        .upload(`${date.getDate()}/${date.getUTCDate()}_${Date.now()}_${file.path}.${file.name.split('.').pop()}`, file)
        
    if (error) {
        alert(error.message)
        console.log(error.message)
        return;
    }

    if (data) {
        return data;
    }
}

export const getPublicUrl = (bucket, path, params=null) => {    
    const { data } = supabase
        .storage
        .from(bucket)
        .getPublicUrl(path, params)

    if (data) {
        return data;
    }
}

// export const generateNewPassword = () => {
//     return GeneratePassword({
//         length: 8,
//         symbols: false,
//         uppercase: true,
//         lowercase: false,
//       })
// }
