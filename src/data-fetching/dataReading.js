import { supabase } from "../supabaise-config/supabaiseClient";

export const dataReading = async () => {
  const { data, error } = await supabase.from("Patient").select("*");

  if (error) {
    console.error("Erreur lors de la récupération des données :", error);
    return null;
  }

  return data;
};

export const getAllMedecin = async () => {
    let { data, error } = await supabase
        .from('Medecin')
        .select('*')
    
    if (error) {
        alert(error.message);
        return;
    }

    if (data) {
        return data;
    }
}

export const getAllPharmacien = async () => {
    let { data, error } = await supabase
        .from('Pharmacien')
        .select('*')
    
    if (error) {
        alert(error.message);
        return;
    }

    if (data) {
        return data;
    }
}

export const getAllCaissier = async () => {
    let { data, error } = await supabase
        .from('Caissier')
        .select('*')
    
    if (error) {
        alert(error.message);
        return;
    }

    if (data) {
        return data;
    }
}

export const getAllInfirmier = async () => {
    let { data, error } = await supabase
        .from('Infirmier')
        .select('*')
    
    if (error) {
        alert(error.message);
        return;
    }

    if (data) {
        return data;
    }
}

export const getAllReceptionniste = async () => {
    let { data, error } = await supabase
        .from('Receptionniste')
        .select('*')
    
    if (error) {
        alert(error.message);
        return;
    }

    if (data) {
        return data;
    }
}
