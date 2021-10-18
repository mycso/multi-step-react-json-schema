import React, { createContext, useContext, useState } from 'react';

export const MultiFormContext = createContext();

export const useMultiForm = () => useContext(MultiFormContext); 

export function MultiFormProvider ({ children }) {

    const schema = [
        {
          page: {
            id: 1,
            schema: {
                title: "Personal Details",
                type: "object",
                required: ["firstName", "lastName", "email", "done"],
                properties: {
                    firstName: {type: "string", title: "First Name"},
                    lastName: {type: "string", title: "Last Name"},
                    email: {type: "string", title: "Email Address"},
                    done: {type: "boolean", title: "Done?", default: false}
                },
            },
          },
        },
        {
          page: {
            id: 2,
            schema: {
                title: "Job Type",
                type: "object",
                required: ["jobTitle", "jobCategory", "currentRole", "done"],
                properties: {
                    jobTitle: {type: "string", title: "Job Title"},
                    jobCategory: {type: "string", title: "Job Category"},
                    currentRole: {type: "string", title: "Current Job Role"},
                    done: {type: "boolean", title: "Done?", default: false}
                },
            },
          },
        },
        {
            page: {
                id: 3,
                schema: {
                    title: "Employer",
                    type: "object",
                    required: ["nameOfEmployer", "reference1", "reference2", "done"],
                    properties: {
                        nameOfEmployer: {type: "string", title: "Name of Employer"},
                        reference1: {type: "string", title: "Referee 1"},
                        reference2: {type: "string", title: "Referee 2"},
                        done: {type: "boolean", title: "Done?", default: false}
                    }
                },
            },
        },
        {
            page: {
                id: 4,
                schema: {
                    title: "Tell us more about yourself",
                    type: "object",
                    required: ["shortSummary"],
                    properties: {
                        shortSummary: {type: "string", title: "Short Summary"},
                    }
                },
            },
        },
    ];

    const [ schemaData, setSchemaData ] = useState(schema); 
    const [ pagingData, setPagingData ] = useState([undefined]);

    return (
        <MultiFormContext.Provider value={{ schemaData, setSchemaData, pagingData, setPagingData }}>
            {children}
        </MultiFormContext.Provider>
    );
}