import React from 'react';

const MapWithLegend = () => {
    return (
        <div className="bg-white p-3 rounded-md">
            <div className="w-full h-96 rounded-md overflow-hidden shadow-md">
                <iframe
                    title="Google Map"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15918.551650682062!2d-38.5299387!3d-3.7440895!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74859e146e89f%3A0x9f1f41c2dc69f15a!2sFortaleza%2C%20CE%2C%20Brazil!5e0!3m2!1sen!2sbr!4v1620330790934!5m2!1sen!2sbr"
                ></iframe>
            </div>

            {/* Legends */}
            <div className="mt-6 px-6 space-y-6  text-sm font-light">
                <div className="flex items-center">
                    <span className="w-4 h-4 rounded bg-green-500 inline-block mr-2"></span>
                    Healthy Certs <span className="ml-auto font-normal text-gray-600">400</span>
                </div>
                <div className="flex items-center">
                    <span className="w-4 h-4 rounded bg-red-500 inline-block mr-2"></span>
                    Expired Certs <span className="ml-auto font-normal text-gray-600">400</span>
                </div>
                <div className="flex items-center">
                    <span className="w-4 h-4 rounded bg-yellow-500 inline-block mr-2"></span>
                    Critical Certs <span className="ml-auto font-normal text-gray-600">400</span>
                </div>
                <div className="flex items-center">
                    <span className="w-4 h-4 rounded bg-gray-500 inline-block mr-2"></span>
                    Warning Certs <span className="ml-auto font-normal text-gray-600">400</span>
                </div>
            </div>
        </div>
    );
};

export default MapWithLegend;
