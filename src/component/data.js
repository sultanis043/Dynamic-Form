export const Json_Data = [
    {
        "formHeading": "Employee Form",
        "fields": [
            {
                "id": "firstname",
                "label": "First Name",
                "type": "text",
                "validations": {
                    "nullable": false
                }
            },
            {
                "id": "lastname",
                "label": "Last Name",
                "type": "text",
                "validations": {
                    "nullable": false
                }
            },
            {
                "id": "age",
                "label": "Age",
                "type": "number",
                "validations": {
                    "nullable": false
                }
            },
            {
                "id": "gender",
                "label": "Gender",
                "type": "radio",
                "options": [
                    {
                        "label": "Male",
                        "value": "male"
                    },
                    {
                        "label": "Female",
                        "value": "female"
                    }
                ],
                "validations": {
                    "nullable": false
                }
            },
            {
                "id": "email",
                "label": "Email",
                "type": "text",
                "validations": {
                    "nullable": false
                }
            },
            {
                "id": "maritalStatus",
                "label": "Marital Status",
                "type": "select",
                "options": [
                    {
                        "label": "Marrid",
                        "value": "marrid"
                    },
                    {
                        "label": "Unmarrid",
                        "value": "unmarrid"
                    }
                ],
                "validations": {
                    "nullable": false
                }
            },
            {
                "id": "address",
                "label": "Address",
                "type": "textArea",
                "validations": {
                    "nullable": false
                }
            }
        ]
    }
];