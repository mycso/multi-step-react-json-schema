/* eslint-disable react/no-danger */
import React, { Fragment, useState, useEffect } from 'react';
import Form from 'react-jsonschema-form';
import { useMultiForm } from './multiFormContext';

export default function MultiForm({}) {
    const [currentPage, setCurrentPage] = useState(0);
    const { schemaData, setSchemaData, pagingData, setPagingData } = useMultiForm();

    const formData = {
        firstName: pagingData[0]?.data.firstName,
        lastName: pagingData[0]?.data.lastName,
        email: pagingData[0]?.data.email,
        done: pagingData[0]?.data.done,
        jobTitle: pagingData[1]?.data.jobTitle,
        jobCategory: pagingData[1]?.data.jobCategory,
        currentRole: pagingData[1]?.data.currentRole,
        done: pagingData[1]?.data.done,
        nameOfEmployer: pagingData[2]?.data.nameOfEmployer,
        reference1: pagingData[2]?.data.reference1,
        reference2: pagingData[2]?.data.reference2,
        done: pagingData[2]?.data.done,
        shortSummary: pagingData[3]?.data.shortSummary,
        done: pagingData[3]?.data.done,
    };

    const uiSchema =  {
        shortSummary: {
          "ui:widget": "textarea" // could also be "select"
        }
    };

    function ErrorListTemplate() {
        return (
            <div className="notification__NoteWrapper-sc-1nwifmf-0 jpDIqX notification is-danger has-text-centered">
                There are errors in the form. Please add the missing details and try again
            </div>
        );
    }

    useEffect(() => {
        // reversed conditional logic
        if (currentPage > schemaData.length) {
          submit(pagingData);
        }
    }, [currentPage])
      
    const handleNext = (e) => {
        if (currentPage === schemaData.length) return;
        setPagingData( previous => [
          ...previous,
          {
            id: currentPage,
            data: e.formData,
          },
        ]);
      
        if (currentPage < schemaData.length) setCurrentPage(currentPage + 1);
        // remove else
    };

    const handlePrev = () => {
        setCurrentPage(currentPage - 1);
    };

    function submit(e) {
        e.preventDefault(); 
        setSchemaData(pagingData)
        // {fetch('/api/form', { method: POST, body: JSON.stringify(data) })}
    }

    function PagingForm() {
        return (
            <div>
                <div><progress style={{'width': '100%'}} max={schemaData.length} value={schemaData[currentPage]?.page?.id} /></div>
                <Form schema={schemaData[currentPage]?.page?.schema}
                    uiSchema={uiSchema}
                    formData={formData}
                    onSubmit={handleNext}
                    submit={submit}
                    noHtml5Validate
                    ErrorList={ErrorListTemplate}
                >
                {schemaData[currentPage]?.page?.id !== 1 && <button className="btn btn-info" onClick={handlePrev}>
                    Prev
                </button>}
                {schemaData[currentPage]?.page?.id < schemaData.length && <button className="btn btn-info" onSubmit={handleNext}>
                    Next
                </button>}
                {schemaData[currentPage]?.page?.id === schemaData.length && <button className="btn btn-info" type="submit" onClick={submit}>Submit</button>}
                </Form>
            </div>
        )
    }
  
  return (
        <div className="columns is-centered">
            <Fragment>
                <div className="column is-8 main-content-wrapper">
                    <section className="section content">
                        <PagingForm />
                    </section>
                </div>
            </Fragment>
        </div>
  );
}