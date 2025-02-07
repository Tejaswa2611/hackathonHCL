// make api for taking 

// data.user_id,
// data.full_name,
// data.dob_age,
// data.gender,
// data.marital_status,
// data.address,
// data.phone_number,
// data.email_address,
// data.employment_status,
// data.occupation,
// data.education_level,
// data.race_ethnicity,
// data.nationality,
// data.primary_language,
// data.health_status,
// data.smoking_alcohol_drug_use,
// data.physical_activity_level,
// data.heart_rate,
// data.blood_pressure,
// data.respiratory_rate,
// data.body_temp,
// data.oxygen_level,
// data.weight,
// data.height,
// data.electrocardiogram,
// data.glucose_level,
// data.urine_analysis

const User = require('../models/User');
const { generateToken } = require('../utils/jwtUtils');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const pool = require('../config/db');



exports.crcEnrollment = async (req, res) => {
    try {
        const {
            full_name, dob_age, gender, marital_status, address, phone_number, email_address, employment_status, occupation, education_level, race_ethnicity, nationality, primary_language, health_status, smoking_alcohol_drug_use, physical_activity_level, heart_rate, blood_pressure, respiratory_rate, body_temp, oxygen_level, weight, height, electrocardiogram, glucose_level, urine_analysis
        } = req.body;

        const user_id = uuidv4();

        const query = `
            INSERT INTO health_info (
                user_id, full_name, dob_age, gender, marital_status, address, phone_number, email_address, employment_status, occupation, education_level, race_ethnicity, nationality, primary_language, health_status, smoking_alcohol_drug_use, physical_activity_level, heart_rate, blood_pressure, respiratory_rate, body_temp, oxygen_level, weight, height, electrocardiogram, glucose_level, urine_analysis
            ) VALUES (
                $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27
            )
        `;

        const values = [
            user_id, full_name, dob_age, gender, marital_status, address, phone_number, email_address, employment_status, occupation, education_level, race_ethnicity, nationality, primary_language, health_status, smoking_alcohol_drug_use, physical_activity_level, heart_rate, blood_pressure, respiratory_rate, body_temp, oxygen_level, weight, height, electrocardiogram, glucose_level, urine_analysis
        ];

        await pool.query(query, values);

        res.status(201).json({ message: 'Data stored successfully', user_id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
