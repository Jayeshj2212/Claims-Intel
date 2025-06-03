import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import navbg from '/dist/img/navbg.jpeg'; 
import { Users, FileText, TrendingUp, Guitar as Hospital, Activity, DollarSign, Banknote, ArrowLeft, Search, Heart, Calendar, Clock, Weight, Ruler, Activity as Pulse, MapPin, History, AlertCircle, Timer, FileCheck, TrendingDown, Wallet, UserCheck, Building, Stethoscope } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, LineChart, Line } from 'recharts';

const yearlyData = [
  { year: '2018', claims: 2 },
  { year: '2019', claims: 7 },
  { year: '2020', claims: 6 },
  { year: '2021', claims: 8 },
  { year: '2022', claims: 3 },
  { year: '2023', claims: 3 },
  { year: '2024', claims: 3 },
];

const memberDetails = {
  'Rajesh Chaudhary': {
    bmi: 24.5,
    bloodPressure: '120/80',
    lastCheckup: '2024-01-15',
    conditions: ['Hypertension', 'Type 2 Diabetes'],
    medications: ['Metformin', 'Lisinopril'],
    allergies: ['Penicillin'],
    height: '175 cm',
    weight: '75 kg'
  },
  'Rekha Chaudhary': {
    bmi: 23.1,
    bloodPressure: '118/75',
    lastCheckup: '2024-02-10',
    conditions: ['Arthritis'],
    medications: ['Ibuprofen'],
    allergies: ['None'],
    height: '160 cm',
    weight: '65 kg'
  }
};

const claimDetails = {
  'Apollo Hospital': [
    { claimNo: 'CLM001', admissionDate: '2024-01-15', dischargeDate: '2024-01-20', amount: '₹2.5L', diagnosis: 'Knee Surgery' },
    { claimNo: 'CLM002', admissionDate: '2023-11-10', dischargeDate: '2023-11-15', amount: '₹1.8L', diagnosis: 'Pneumonia' }
  ]
};

function DashboardPage() {
  const navigate = useNavigate();
  const [searchId, setSearchId] = useState('');
  const [selectedMember, setSelectedMember] = useState(null);
  const [showClaimDetails, setShowClaimDetails] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
  };

  return (
    <div className="min-h-screen w-screen bg-gray-50">
      {/* Header */}
      <header className="relative bg-gradient-to-r from-blue-700 to-blue-500 text-white py-4">
      <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${navbg})` }}
        ></div>
        <div className="w-full px-4 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button 
                onClick={() => navigate('/')} 
                className="p-2 bg-white text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <img src="dist/img/logo.png" alt="Logo" className="h-16 w-25 py-2" />
              <h1 className="text-xl mt-1px sm:text-3xl font-bold">Claims Intelligence</h1>
            </div>
            <form onSubmit={handleSearch} className="flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search BCID..."
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                  className="w-full sm:w-64 px-4 py-2 rounded-full shadow-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-300"
                />
                <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </header>

      <main className="w-full px-4 py-8 space-y-8">
        {/* Customer Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-xl font-semibold">Customer Information</h2>
            </div>
            <div className="space-y-3 text-left">
              <p><span className="font-medium">Full Name:</span> Rajesh Chaudhary <button className="bg-red-500 text-white px-2 py-1 rounded-full text-sm">Suspicious Customer</button></p>
              <p><span className="font-medium">Policy Number:</span> 123456789 <span className="font-medium">| Days Active:</span> 365 <span className="font-medium">| ID:</span> 101254896</p>
              <p><span className="font-medium">Purchased Date:</span> 2023-01-01 <span className="font-medium">| Renewal Date:</span> 2024-12-31 <span className="font-medium">| Policy Age:</span> 1 year</p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="flex items-center space-x-2">
                  <Weight className="w-5 h-5 text-blue-500" />
                  <span>75 kg</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Ruler className="w-5 h-5 text-blue-500" />
                  <span>175 cm</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-red-500" />
                  <span>120/80</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Pulse className="w-5 h-5 text-green-500" />
                  <span>BMI: 24.5</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-xl font-semibold">Covered Members</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Name</th>
                    <th className="text-left py-2">Age</th>
                    <th className="text-left py-2">Relation</th>
                  </tr>
                </thead>
                <tbody className="text-left">
                  {[
                    { name: 'Rekha Chaudhary', age: 65, relation: 'Mother' },
                    { name: 'Harish Chaudhary', age: 22, relation: 'Son' },
                    { name: 'Anjali Chaudhary', age: 45, relation: 'Wife' },
                    { name: 'Suresh Chaudhary', age: 75, relation: 'Father' },
                    { name: 'Mayra Chaudhary', age: 19, relation: 'Daughter' }
                  ].map((member) => (
                    <tr 
                      key={member.name}
                      onClick={() => setSelectedMember(memberDetails[member.name])}
                      className="cursor-pointer hover:bg-blue-50"
                    >
                      <td>{member.name}</td>
                      <td>{member.age}</td>
                      <td>{member.relation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Member Details Modal */}
        {selectedMember && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl p-6 max-w-2xl w-full">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Health Profile</h3>
                <button 
                  onClick={() => setSelectedMember(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ×
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-medium">BMI</p>
                  <p>{selectedMember.bmi}</p>
                </div>
                <div>
                  <p className="font-medium">Blood Pressure</p>
                  <p>{selectedMember.bloodPressure}</p>
                </div>
                <div>
                  <p className="font-medium">Height</p>
                  <p>{selectedMember.height}</p>
                </div>
                <div>
                  <p className="font-medium">Weight</p>
                  <p>{selectedMember.weight}</p>
                </div>
                <div className="col-span-2">
                  <p className="font-medium">Medical Conditions</p>
                  <ul className="list-disc list-inside">
                    {selectedMember.conditions.map((condition) => (
                      <li key={condition}>{condition}</li>
                    ))}
                  </ul>
                </div>
                <div className="col-span-2">
                  <p className="font-medium">Current Medications</p>
                  <ul className="list-disc list-inside">
                    {selectedMember.medications.map((medication) => (
                      <li key={medication}>{medication}</li>
                    ))}
                  </ul>
                </div>
                <div className="col-span-2">
                  <p className="font-medium">Allergies</p>
                  <ul className="list-disc list-inside">
                    {selectedMember.allergies.map((allergy) => (
                      <li key={allergy}>{allergy}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Claims Details */}
        {showClaimDetails && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl p-6 max-w-2xl w-full">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Claim Details</h3>
                <button 
                  onClick={() => setShowClaimDetails(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ×
                </button>
              </div>
              <div className="space-y-4">
                {claimDetails['Apollo Hospital'].map((claim) => (
                  <div key={claim.claimNo} className="border-b pb-4">
                    <p><span className="font-medium">Claim No:</span> {claim.claimNo}</p>
                    <p><span className="font-medium">Admission Date:</span> {claim.admissionDate}</p>
                    <p><span className="font-medium">Discharge Date:</span> {claim.dischargeDate}</p>
                    <p><span className="font-medium">Amount:</span> {claim.amount}</p>
                    <p><span className="font-medium">Diagnosis:</span> {claim.diagnosis}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {/* KPIs */}
        <div className="grid md:grid-cols-5 gap-6">
          <div 
            className="bg-white rounded-xl shadow p-6 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setShowClaimDetails('total')}
          >
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold">Total Claims</h3>
            </div>
            <p className="text-3xl font-bold">15 Claims</p>
            <p className="text-gray-600">Total Amount: ₹16.5L</p>
          </div>

          <div 
            className="bg-white rounded-xl shadow p-6 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setShowClaimDetails('highest')}
          >
            <div className="flex items-center mb-4">
              <TrendingUp className="w-6 h-6 text-green-600 mr-2" />
              <h3 className="text-lg font-semibold">Highest Claim</h3>
            </div>
            <p className="text-3xl font-bold">₹15.5L</p>
            <p className="text-gray-600">Heart Surgery</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center mb-4">
              <Banknote className="w-6 h-6 text-purple-600 mr-2" />
              <h3 className="text-lg font-semibold">Cashless Claims</h3>
            </div>
            <p className="text-3xl font-bold">₹48.4L</p>
            <p className="text-gray-600">40 claims</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center mb-4">
              <Banknote className="w-6 h-6 text-purple-600 mr-2" />
              <h3 className="text-lg font-semibold">Reimbursement Claims</h3>
            </div>
            <p className="text-3xl font-bold">₹13.2L</p>
            <p className="text-gray-600">14 claims</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center mb-4">
              <DollarSign className="w-6 h-6 text-yellow-600 mr-2" />
              <h3 className="text-lg font-semibold">Average Claim Amount</h3>
            </div>
            <p className="text-3xl font-bold">₹1.1L</p>
            <p className="text-gray-600">ACS</p>
          </div>
        </div>

        {/* Fraudulent Claims and Approval Rate */}
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center mb-4">
              <FileCheck className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold">Claim Approval Rate</h3>
            </div>
            <div className="bg-green-100 p-4 rounded-lg">
              <p className="text-4xl font-bold text-green-600">85%</p>
              <p className="text-lg text-green-700">Approved</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center mb-4">
              <Timer className="w-6 h-6 text-red-600 mr-2" />
              <h3 className="text-lg font-semibold">Rejected Claims</h3>
            </div>
            <div className="bg-red-100 p-4 rounded-lg">
              <p className="text-lg text-yellow-700">2 Rejected claims detected</p>
              <ul className="list-disc list-inside">
                <li>Claim No: <span className="font-bold">CLM012</span>- Reason: Insufficient Documentation </li>
                <li>Claim No: <span className="font-bold">CLM015</span>- Reason: Policy Exclusion </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center mb-4">
              <AlertCircle className="w-6 h-6 text-red-600 mr-2" />
              <h3 className="text-lg font-semibold">Fraudulent Claims Detection</h3>
            </div>
            <div className="bg-yellow-100 p-4 rounded-lg">
              <p className="text-lg text-yellow-700">2 fraudulent claims detected</p>
              <ul className="list-disc list-inside">
                <li>Claim No: <span className="font-bold">CLM008</span></li>
                <li>Claim No: <span className="font-bold">CLM009</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Additional KPIs */}
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center mb-4">
              <Activity className="w-6 h-6 text-purple-600 mr-2" />
              <h3 className="text-lg font-semibold">Top 5 Diagnoses</h3>
            </div>
            <ul className="list-disc list-inside space-y-2">
              <li className="flex justify-between"><span>Hypertension</span> <span className="text-red-500">₹2.5L (High)</span></li>
              <li className="flex justify-between"><span>Diabetes</span> <span className="text-orange-500">₹1.8L (Medium)</span></li>
              <li className="flex justify-between"><span>Heart Disease</span> <span className="text-red-500">₹3.0L (High)</span></li>
              <li className="flex justify-between"><span>Arthritis</span> <span className="text-green-500">₹1.2L (Low)</span></li>
              <li className="flex justify-between"><span>Asthma</span> <span className="text-green-500">₹0.9L (Low)</span></li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-green-600 mr-2" />
              <h3 className="text-lg font-semibold">Claims by Member Age Group</h3>
            </div>
            <ul className="list-disc list-inside space-y-2">
              <li className="flex justify-between"><span>18-25</span> <span>10 claims</span></li>
              <li className="flex justify-between"><span>26-35</span> <span>20 claims</span></li>
              <li className="flex justify-between"><span>36-45</span> <span>15 claims</span></li>
              <li className="flex justify-between"><span>46-60</span> <span>25 claims</span></li>
              <li className="flex justify-between"><span>60+</span> <span>30 claims</span></li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center mb-4">
              <Calendar className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold">Monthly Claims Trend</h3>
            </div>
            <select className="mb-4">
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
            </select>
            <div className="h-32">
              {/* Placeholder for line chart */}
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={yearlyData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="claims" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Yearly Claims Distribution</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={yearlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="claims" fill="#3B82F6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center mb-4">
              <Activity className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold">ICD Wise Claims</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left">
                <thead>
                  <tr className="border-b">
                    <th className="py-2">ICD</th>
                    <th className="py-2">Claims</th>
                    <th className="py-2">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">Kidney</td>
                    <td className="py-2">60</td>
                    <td className="py-2">2,50,000 Rs.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Cancer</td>
                    <td className="py-2">40</td>
                    <td className="py-2">3,50,000 Rs.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Heart Attack</td>
                    <td className="py-2">15</td>
                    <td className="py-2">5,50,000 Rs.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Tumor</td>
                    <td className="py-2">15</td>
                    <td className="py-2">3,50,000 Rs.</td>
                  </tr>
                  <tr>
                    <td className="py-2">Kidney Stone</td>
                    <td className="py-2">17</td>
                    <td className="py-2">1,50,000 Rs.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Most Frequent Hospital Visits and Latest Claims */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow p-6 md:col-span-1">
            <div className="flex items-center mb-4">
              <Hospital className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold">Most Frequent Hospital Visits</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Hospital</th>
                    <th className="text-left py-2">Claims Count</th>
                    <th className="text-left py-2">Amount Claimed</th>
                    <th className="text-left py-2">Distance</th>
                  </tr>
                </thead>
                <tbody className="text-left">
                  <tr className="cursor-pointer hover:bg-blue-50" onClick={() => setShowClaimDetails('apollo')}>
                    <td>Apollo Hospital</td>
                    <td>5</td>
                    <td>₹8.5L</td>
                    <td>12 km</td>
                  </tr>
                  <tr className="cursor-pointer hover:bg-blue-50" onClick={() => setShowClaimDetails('fortis')}>
                    <td>Fortis Hospital</td>
                    <td>4</td>
                    <td>₹6.2L</td>
                    <td>8 km</td>
                  </tr>
                  <tr className="cursor-pointer hover:bg-blue-50" onClick={() => setShowClaimDetails('max')}>
                    <td>Max Healthcare</td>
                    <td>3</td>
                    <td>₹4.8L</td>
                    <td>15 km</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6 md:col-span-1">
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold">Latest Claims</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Claim No</th>
                    <th className="text-left py-2">Date</th>
                    <th className="text-left py-2">Hospital Name</th>
                    <th className="text-left py-2">ICD</th>
                    <th className="text-left py-2">Approved Amount</th>
                  </tr>
                </thead>
                <tbody className="text-left">
                  <tr>
                    <td>CLM003</td>
                    <td>2024-03-01</td>
                    <td>City Hospital</td>
                    <td>ICD-10</td>
                    <td>₹1.2L</td>
                  </tr>
                  <tr>
                    <td>CLM004</td>
                    <td>2024-02-15</td>
                    <td>Global Hospital</td>
                    <td>ICD-11</td>
                    <td>₹2.0L</td>
                  </tr>
                  <tr>
                    <td>CLM005</td>
                    <td>2024-02-10</td>
                    <td>National Hospital</td>
                    <td>ICD-12</td>
                    <td>₹1.5L</td>
                  </tr>
                  <tr>
                    <td>CLM006</td>
                    <td>2024-02-05</td>
                    <td>Community Hospital</td>
                    <td>ICD-13</td>
                    <td>₹1.8L</td>
                  </tr>
                  <tr>
                    <td>CLM007</td>
                    <td>2024-01-30</td>
                    <td>Regional Hospital</td>
                    <td>ICD-14</td>
                    <td>₹2.3L</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DashboardPage; 
