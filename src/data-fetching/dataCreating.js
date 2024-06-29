import { supabase } from "../supabaise-config/supabaiseClient";

export const createProfil = async (
  nom,
  prenom,
  telephone,
  dateNaissance,
  lieuNaissance,
  sexe,
  age,
  adresse,
  etatCivil,
  nombreEnfants,
  profession,
  poids
) => {
  const { data, error } = await supabase
    .from("Patient")
    .insert([
      {
        nom,
        prenom,
        telephone,
        date_naissance: dateNaissance,
        lieu_naissance: lieuNaissance,
        sexe,
        age,
        adresse,
        etat_civil: etatCivil,
        nombre_enfants: nombreEnfants,
        profession,
        poids,
      },
    ])
    .select();

  if (error) {
    alert(error.message);
    return;
  }

  if (data) {
    return data;
  }
};

export const fetchPatients = async () => {
  const { data, error } = await supabase
    .from("Patient")
    .select("id, nom, prenom");

  if (error) {
    console.error(error);
    return [];
  }

  return data;
};

export const createConsultation = async (
  patientName,
  situation,
  antecedents,
  motif,
  examenClinique,
  examensBiologiques,
  examensRadiologiques,
  diagnostique,
  traitement,
  patient_id
) => {
  const { data, error } = await supabase
    .from("Consultation")
    .insert([
      {
        patient_name: patientName,
        situation: situation,
        antecedents: antecedents,
        motif: motif,
        examen_clinique: examenClinique,
        examens_biologiques: examensBiologiques,
        examens_radiologiques: examensRadiologiques,
        diagnostique: diagnostique,
        traitement: traitement,
        patient_id: patient_id,
      },
    ])
    .select();

  if (error) {
    alert(error.message);
    return;
  }

  if (data) {
    return data;
  }
};
// export const createProfil = async (nom, prenom, postnom, sexe, dateNaissance, adresse, emailPatient) => {
//     const { data, error } = await supabase
//         .from('Profil')
//         .insert([
//         { nom: nom, prenom: prenom, postnom: postnom, sexe: sexe, date_naissance: dateNaissance, adresse: adresse, patient: emailPatient },
//         ])
//         .select()

//     if (error) {
//         alert(error.message);
//         return;
//     }

//     if (data) {
//         return data;
//     }
// }

export const createUserProfil = async (nom, prenom, email, profil) => {
    const { data, error } = await supabase
        .from(profil)
        .insert([
        { nom: nom, prenom: prenom, email: email },
        ])
        .select()

    if (error) {
        alert(error.message);
        return;
    }

    if (data) {
        return data;
    }
}