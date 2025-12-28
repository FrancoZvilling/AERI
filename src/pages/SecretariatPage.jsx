import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import SecretariatLayout from '../components/layout/SecretariatLayout';
import mockData from '../data/mockData.json';

const SecretariatPage = () => {
    const { slug } = useParams();

    // Find secretariat content by slug (e.g., 'turismo', 'gremial')
    // In a real app, this would be an API call
    const secretariat = mockData.secretariats.find(s => s.slug === slug);

    // If simple match fails, try to match ID or other logic? 
    // For now assume slug matches id or slug field in mockData.

    if (!secretariat) {
        // If not found in secretariats list, we might want to return 404
        // But since our mock data is limited, let's just render a placeholder if we can't find it
        // or redirect to home.
        return (
            <div className="py-20 text-center">
                <h2 className="text-2xl font-bold text-gray-700">Sección no encontrada o en construcción</h2>
            </div>
        );
    }

    return <SecretariatLayout secretariat={secretariat} />;
};

export default SecretariatPage;
