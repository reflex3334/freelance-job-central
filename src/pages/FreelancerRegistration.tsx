
import React from 'react';
import FreelancerRegistrationForm from '../components/FreelancerRegistrationForm';

const FreelancerRegistration = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-center">Freelancer Registration</h1>
          <p className="text-gray-600 text-center mt-2">Complete your profile to start finding work</p>
        </div>
        <FreelancerRegistrationForm />
      </div>
    </div>
  );
};

export default FreelancerRegistration;
