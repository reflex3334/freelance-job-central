
import React from 'react';
import ClientRegistrationForm from '../components/ClientRegistrationForm';

const ClientRegistration = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-center">Client Registration</h1>
          <p className="text-gray-600 text-center mt-2">Complete your profile to start posting projects</p>
        </div>
        <ClientRegistrationForm />
      </div>
    </div>
  );
};

export default ClientRegistration;
