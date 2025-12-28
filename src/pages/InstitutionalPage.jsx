import React from 'react';
import InstitutionalLayout from '../components/layout/InstitutionalLayout';
import mockData from '../data/mockData.json';

const InstitutionalPage = ({ title, subtitle, showAuthorities = false, showDocs = false, backgroundImage }) => {
    // Pass relevant data to the layout
    // We can filter authorities or docs if needed based on props specific to the page type

    return (
        <InstitutionalLayout
            title={title}
            subtitle={subtitle}
            authorities={showAuthorities ? mockData.authorities : []}
            documents={showDocs ? [] : []} // We would pass docs here
            backgroundImage={backgroundImage}
        />
    );
};

export default InstitutionalPage;
