// Personal Information 
// • Full Name 
// • Date of Birth (DOB) / Age 
// • Gender 
// o Male, Female, Non-Binary 
// • Marital Status 
// o Single, Married, Divorced, Widowed, Other 
// 2. Contact Information 
// • Address 
// o Street Address, City, State/Province, ZIP/Postal Code, Country 
// • Phone Number 
// • Email Address 
// 3. Socioeconomic Data 
// • Employment Status 
// o Employed, Unemployed, Retired, Student, Other 
// • Occupation/Job Title 
// 4. Cultural/Ethnic Background 
// • Education Level 
// o No Formal Education, High School, Bachelor’s Degree, Master’s Degree, 
// Doctorate, Other 
// • Race/Ethnicity 
// o White, Black/African American, Asian, Hispanic/Latino, Native American, 
// Pacific Islander, Mixed, Other 
// • Nationality/Citizenship 
// • Primary Language(s) 
// 5. Health & Lifestyle (Optional for Specific Use Cases) 
// • Health Status 
// o Chronic Conditions, Disabilities, etc. 
// • Smoking/Alcohol/Drug Use 
// • Physical Activity Level

const pool = require('../config/db');

const Health = {
    async create(data) {
        const query = `
      INSERT INTO health_info (
        user_id, personal_info, contact_info, socioeco_data, cultural_info,
        health_status, heart_rate, blood_pressure, respiratory_rate,
        body_temp, oxygen_level, weight, height, electrocardiogram,
        glucose_level, urine_analysis
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
      RETURNING *`;

        const values = [
            data.user_id,
            data.personal_info,
            data.contact_info,
            data.socioeco_data,
            data.cultural_info,
            data.health_status,
            data.heart_rate,
            data.blood_pressure,
            data.respiratory_rate,
            data.body_temp,
            data.oxygen_level,
            data.weight,
            data.height,
            data.electrocardiogram,
            data.glucose_level,
            data.urine_analysis
        ];

        const { rows } = await pool.query(query, values);
        return rows[0];
    }
};

module.exports = Health;
