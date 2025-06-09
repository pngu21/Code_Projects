import React, { useState, useEffect } from 'react';
import { Phone, User, Scissors, Clock, CheckCircle, DollarSign, List, Users, Briefcase, Settings, BarChart2, Calendar, ChevronRight, QrCode, ClipboardList, Package, CircleDollarSign, PauseCircle, PlayCircle } from 'lucide-react';

// Ensure Tailwind CSS is loaded (assumed in the environment)
// <script src="https://cdn.tailwindcss.com"></script>

// Main App Component
const App = () => {
  const [currentScreen, setCurrentScreen] = useState('customerJoin'); // 'customerJoin', 'staffDashboard', 'managerDashboard'

  const renderScreen = () => {
    switch (currentScreen) {
      case 'customerJoin':
        return <CustomerQueueJoinScreen setCurrentScreen={setCurrentScreen} />;
      case 'staffDashboard':
        return <StaffQueueManagementDashboard setCurrentScreen={setCurrentScreen} />;
      case 'managerDashboard':
        return <ShopManagerDashboard setCurrentScreen={setCurrentScreen} />;
      default:
        return <CustomerQueueJoinScreen setCurrentScreen={setCurrentScreen} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-inter text-gray-800 flex flex-col items-center justify-center p-4">
      <header className="w-full max-w-4xl bg-white shadow-md rounded-lg p-4 mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-700">Kings Barbershop</h1>
        <div className="flex space-x-4">
          <button
            onClick={() => setCurrentScreen('customerJoin')}
            className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
              currentScreen === 'customerJoin' ? 'bg-indigo-600 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Customer
          </button>
          <button
            onClick={() => setCurrentScreen('staffDashboard')}
            className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
              currentScreen === 'staffDashboard' ? 'bg-indigo-600 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Staff
          </button>
          <button
            onClick={() => setCurrentScreen('managerDashboard')}
            className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
              currentScreen === 'managerDashboard' ? 'bg-indigo-600 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Manager
          </button>
        </div>
      </header>

      <main className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        {renderScreen()}
      </main>
    </div>
  );
};

// --- Screen 1: Customer Queue Join ---
const CustomerQueueJoinScreen = () => {
  const [step, setStep] = useState(0); // 0: Landing, 1: Phone, 2: Details, 3: Services, 4: Confirmation
  const [phoneNumber, setPhoneNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedServices, setSelectedServices] = useState([]);
  const [isExistingCustomer, setIsExistingCustomer] = useState(false);
  const [queueNumber, setQueueNumber] = useState(null);
  const [estimatedWaitTime, setEstimatedWaitTime] = useState(null);

  // Dummy services data
  const availableServices = [
    { id: 's1', name: 'Standard Haircut', duration: 30, price: 150.00 },
    { id: 's2', name: 'Beard Trim', duration: 15, price: 80.00 },
    { id: 's3', name: 'Haircut & Beard Trim', duration: 45, price: 200.00 },
    { id: 's4', name: 'Kids Haircut', duration: 20, price: 100.00 },
  ];

  const handlePhoneSubmit = () => {
    // Simulate API call to check phone number
    if (phoneNumber === '0821234567') { // Existing customer
      setIsExistingCustomer(true);
      setFirstName('Alice');
      setLastName('Smith');
      setEmail('alice@example.com');
      setStep(3); // Skip details, go to services
    } else { // New customer
      setIsExistingCustomer(false);
      setFirstName('');
      setLastName('');
      setEmail('');
      setStep(2); // Go to details
    }
  };

  const handleServiceToggle = (serviceId) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleJoinQueue = () => {
    // Simulate API call to join queue
    // In a real app, this would involve POST /api/queues
    setQueueNumber(Math.floor(Math.random() * 10) + 1); // Random queue number
    const totalDuration = selectedServices.reduce((sum, id) => {
      const service = availableServices.find(s => s.id === id);
      return sum + (service ? service.duration : 0);
    }, 0);
    setEstimatedWaitTime(totalDuration + Math.floor(Math.random() * 10)); // Add some random buffer
    setStep(4); // Go to confirmation
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-extrabold text-center text-indigo-800 mb-8">Customer Queue</h2>

      {step === 0 && (
        <div className="flex flex-col items-center justify-center space-y-6">
          <p className="text-lg text-gray-600">Welcome to Kings Barbershop!</p>
          <button
            onClick={() => setStep(1)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
          >
            <ClipboardList className="w-5 h-5" />
            <span>Join Queue</span>
          </button>
          <div className="text-center mt-6">
            <p className="text-gray-500 text-sm mb-2">Or scan QR code:</p>
            <div className="bg-gray-200 p-4 rounded-lg shadow-inner">
              <QrCode className="w-24 h-24 text-gray-700 mx-auto" />
              <p className="text-xs text-gray-500 mt-2">QR Code Placeholder</p>
            </div>
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-center mb-4">Enter Your Phone Number</h3>
          <div className="flex items-center border border-gray-300 rounded-md shadow-sm focus-within:ring-2 focus-within:ring-indigo-500">
            <Phone className="w-5 h-5 text-gray-400 ml-3" />
            <input
              type="tel"
              placeholder="e.g., 0821234567"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="flex-grow p-3 rounded-md outline-none"
            />
          </div>
          <button
            onClick={handlePhoneSubmit}
            disabled={!phoneNumber}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-md shadow-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next <ChevronRight className="inline-block ml-1 h-4 w-4" />
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-center mb-4">Your Details</h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            <input
              type="email"
              placeholder="Email (Optional)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button
            onClick={() => setStep(3)}
            disabled={!firstName || !lastName}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-md shadow-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next <ChevronRight className="inline-block ml-1 h-4 w-4" />
          </button>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-center mb-4">Select Your Service(s)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {availableServices.map(service => (
              <div
                key={service.id}
                onClick={() => handleServiceToggle(service.id)}
                className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                  selectedServices.includes(service.id)
                    ? 'border-indigo-600 bg-indigo-50 shadow-md'
                    : 'border-gray-200 bg-white hover:bg-gray-50'
                }`}
              >
                <div>
                  <p className="font-semibold text-lg">{service.name}</p>
                  <p className="text-sm text-gray-500">{service.duration} mins</p>
                </div>
                <span className="font-bold text-indigo-700">R{service.price.toFixed(2)}</span>
              </div>
            ))}
          </div>
          <button
            onClick={handleJoinQueue}
            disabled={selectedServices.length === 0}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md shadow-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Confirm & Join Queue
          </button>
        </div>
      )}

      {step === 4 && (
        <div className="text-center space-y-6">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto animate-bounce" />
          <h3 className="text-2xl font-bold text-green-700">You're In!</h3>
          <p className="text-lg text-gray-700">Your queue number: <span className="font-extrabold text-indigo-600 text-3xl">{queueNumber}</span></p>
          <p className="text-md text-gray-600">Estimated wait time: <span className="font-semibold text-indigo-500">{estimatedWaitTime} mins</span></p>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg shadow-inner">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Live Queue Snapshot</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center bg-indigo-100 p-3 rounded-md shadow-sm border border-indigo-200">
                <span className="font-bold text-indigo-800">#1</span>
                <span className="text-indigo-700">John D. (Haircut)</span>
                <span className="text-gray-600 text-sm">In Service</span>
              </div>
              <div className="flex justify-between items-center bg-indigo-100 p-3 rounded-md shadow-sm border border-indigo-200">
                <span className="font-bold text-indigo-800">#2</span>
                <span className="text-indigo-700">Sarah P. (Beard Trim)</span>
                <span className="text-gray-600 text-sm">Waiting</span>
              </div>
              <div className="flex justify-between items-center bg-green-100 p-3 rounded-md shadow-sm border border-green-200">
                <span className="font-bold text-green-800">#{queueNumber}</span>
                <span className="text-green-700">You ({selectedServices.map(id => availableServices.find(s => s.id === id)?.name).join(', ')})</span>
                <span className="text-gray-600 text-sm">Waiting</span>
              </div>
              <div className="flex justify-between items-center bg-gray-100 p-3 rounded-md shadow-sm border border-gray-200">
                <span className="font-bold text-gray-800">#4</span>
                <span className="text-gray-700">Michael B. (Haircut)</span>
                <span className="text-gray-600 text-sm">Waiting</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4">Queue updates in real-time.</p>
          </div>
          <button
            onClick={() => setStep(0)}
            className="mt-6 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-5 rounded-md transition-colors duration-200"
          >
            Done
          </button>
        </div>
      )}
    </div>
  );
};

// --- Screen 2: Staff Queue Management Dashboard ---
const StaffQueueManagementDashboard = () => {
  const [activeTab, setActiveTab] = useState('waiting');
  const [isWalkinModalOpen, setIsWalkinModalOpen] = useState(false);

  // Dummy Data for demonstration
  const [barbers, setBarbers] = useState([
    { id: 'b1', name: 'John Barber', status: 'Available', currentCustomer: null },
    { id: 'b2', name: 'Emily Styles', status: 'Busy', currentCustomer: 'Bob Johnson' },
    { id: 'b3', name: 'Mike Cutts', status: 'On Break', currentCustomer: null },
  ]);

  const [queueEntries, setQueueEntries] = useState([
    { id: 'q1', customerName: 'Alice Smith', service: 'Standard Haircut', joinedAt: '10:00 AM', estWait: '15 mins', status: 'waiting', assignedBarberId: null },
    { id: 'q2', customerName: 'Bob Johnson', service: 'Beard Trim', joinedAt: '09:55 AM', startServiceAt: '10:10 AM', status: 'in_service', assignedBarberId: 'b2' },
    { id: 'q3', customerName: 'Charlie Brown', service: 'Kids Haircut', joinedAt: '10:05 AM', estWait: '25 mins', status: 'waiting', assignedBarberId: null },
    { id: 'q4', customerName: 'Diana Prince', service: 'Standard Haircut', joinedAt: '09:30 AM', startServiceAt: '09:40 AM', endServiceAt: '10:05 AM', status: 'ready_for_payment', assignedBarberId: 'b1' },
    { id: 'q5', customerName: 'Eve Adams', service: 'Haircut & Beard Trim', joinedAt: '09:00 AM', startServiceAt: '09:05 AM', endServiceAt: '09:50 AM', paymentProcessedAt: '09:55 AM', status: 'completed', assignedBarberId: 'b3' },
  ]);

  const handleAssignBarber = (queueId, barberId) => {
    setQueueEntries(prev => prev.map(entry =>
      entry.id === queueId
        ? { ...entry, status: 'in_service', assignedBarberId: barberId, startServiceAt: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) }
        : entry
    ));
    setBarbers(prev => prev.map(barber =>
      barber.id === barberId
        ? { ...barber, status: 'Busy', currentCustomer: queueEntries.find(q => q.id === queueId)?.customerName }
        : barber
    ));
    setActiveTab('in_service');
  };

  const handleMarkReadyForPayment = (queueId) => {
    setQueueEntries(prev => prev.map(entry =>
      entry.id === queueId
        ? { ...entry, status: 'ready_for_payment', endServiceAt: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) }
        : entry
    ));
    // Free up the barber
    const assignedBarber = queueEntries.find(q => q.id === queueId)?.assignedBarberId;
    if (assignedBarber) {
      setBarbers(prev => prev.map(barber =>
        barber.id === assignedBarber
          ? { ...barber, status: 'Available', currentCustomer: null }
          : barber
      ));
    }
    setActiveTab('ready_for_payment');
  };

  const handleMarkPaid = (queueId) => {
    setQueueEntries(prev => prev.map(entry =>
      entry.id === queueId
        ? { ...entry, status: 'completed', paymentProcessedAt: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) }
        : entry
    ));
    setActiveTab('completed');
  };

  const handleMarkNoShow = (queueId) => {
    setQueueEntries(prev => prev.map(entry =>
      entry.id === queueId
        ? { ...entry, status: 'no_show' }
        : entry
    ));
  };

  const handleCancel = (queueId) => {
    setQueueEntries(prev => prev.map(entry =>
      entry.id === queueId
        ? { ...entry, status: 'cancelled' }
        : entry
    ));
  };

  const handleBarberStatusToggle = (barberId) => {
    setBarbers(prev => prev.map(barber =>
      barber.id === barberId
        ? { ...barber, status: barber.status === 'On Break' ? 'Available' : 'On Break' }
        : barber
    ));
  };

  const handleAddWalkin = (newCustomer) => {
    const newEntry = {
      id: `q${queueEntries.length + 1}`,
      customerName: newCustomer.name,
      service: newCustomer.service,
      joinedAt: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      estWait: 'TBD', // This would be calculated by backend
      status: 'waiting',
      assignedBarberId: null,
    };
    setQueueEntries(prev => [...prev, newEntry]);
    setIsWalkinModalOpen(false);
  };

  const filteredQueues = queueEntries.filter(entry => {
    if (activeTab === 'waiting') return entry.status === 'waiting';
    if (activeTab === 'in_service') return entry.status === 'in_service';
    if (activeTab === 'ready_for_payment') return entry.status === 'ready_for_payment';
    if (activeTab === 'completed') return entry.status === 'completed';
    return false;
  });

  return (
    <div className="flex flex-col md:flex-row h-full">
      {/* Left Panel - Barbers */}
      <div className="w-full md:w-1/4 bg-gray-50 p-4 rounded-lg shadow-inner md:mr-4 mb-4 md:mb-0">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center"><Users className="mr-2" /> Barbers</h3>
        <ul className="space-y-3">
          {barbers.map(barber => (
            <li key={barber.id} className="bg-white p-3 rounded-md shadow-sm border border-gray-200">
              <div className="font-semibold text-lg text-indigo-700">{barber.name}</div>
              <div className={`text-sm font-medium ${barber.status === 'Available' ? 'text-green-600' : barber.status === 'Busy' ? 'text-orange-600' : 'text-red-600'}`}>
                Status: {barber.status}
              </div>
              {barber.currentCustomer && (
                <div className="text-xs text-gray-500">Serving: {barber.currentCustomer}</div>
              )}
              <button
                onClick={() => handleBarberStatusToggle(barber.id)}
                className={`mt-2 px-3 py-1 text-xs rounded-full transition-colors duration-200 ${
                  barber.status === 'On Break' ? 'bg-green-100 text-green-700 hover:bg-green-200' : 'bg-red-100 text-red-700 hover:bg-red-200'
                }`}
              >
                {barber.status === 'On Break' ? <><PlayCircle className="inline-block w-3 h-3 mr-1" /> Return</> : <><PauseCircle className="inline-block w-3 h-3 mr-1" /> Break</>}
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setIsWalkinModalOpen(true)}
          className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md shadow-md transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          <User className="w-4 h-4" />
          <span>Add Walk-in</span>
        </button>
      </div>

      {/* Right Panel - Queue Tabs */}
      <div className="flex-grow bg-white p-4 rounded-lg shadow-md">
        <div className="flex border-b border-gray-200 mb-4">
          {['waiting', 'in_service', 'ready_for_payment', 'completed'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-lg font-medium capitalize border-b-2 transition-colors duration-200 ${
                activeTab === tab ? 'border-indigo-600 text-indigo-700' : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.replace('_', ' ')} ({queueEntries.filter(e => e.status === tab).length})
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filteredQueues.length === 0 ? (
            <p className="text-center text-gray-500 py-8">No customers in this tab.</p>
          ) : (
            filteredQueues.map(entry => (
              <div key={entry.id} className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="font-bold text-xl text-gray-800">{entry.customerName}</p>
                  <p className="text-indigo-600 font-medium">{entry.service}</p>
                  {entry.status === 'waiting' && <p className="text-sm text-gray-500">Joined: {entry.joinedAt} | Est. Wait: {entry.estWait}</p>}
                  {entry.status === 'in_service' && <p className="text-sm text-gray-500">Barber: {barbers.find(b => b.id === entry.assignedBarberId)?.name} | Started: {entry.startServiceAt}</p>}
                  {entry.status === 'ready_for_payment' && <p className="text-sm text-gray-500">Finished: {entry.endServiceAt}</p>}
                  {entry.status === 'completed' && <p className="text-sm text-gray-500">Paid: {entry.paymentProcessedAt}</p>}
                </div>
                <div className="mt-3 md:mt-0 flex flex-wrap gap-2">
                  {entry.status === 'waiting' && (
                    <>
                      <select
                        onChange={(e) => handleAssignBarber(entry.id, e.target.value)}
                        className="px-3 py-2 border rounded-md bg-white text-gray-700 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option value="">Assign Barber</option>
                        {barbers.filter(b => b.status === 'Available').map(barber => (
                          <option key={barber.id} value={barber.id}>{barber.name}</option>
                        ))}
                      </select>
                      <button onClick={() => handleMarkNoShow(entry.id)} className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md shadow-sm transition-colors duration-200">No-Show</button>
                      <button onClick={() => handleCancel(entry.id)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow-sm transition-colors duration-200">Cancel</button>
                    </>
                  )}
                  {entry.status === 'in_service' && (
                    <button onClick={() => handleMarkReadyForPayment(entry.id)} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md shadow-sm transition-colors duration-200">Ready for Payment</button>
                  )}
                  {entry.status === 'ready_for_payment' && (
                    <button onClick={() => handleMarkPaid(entry.id)} className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md shadow-sm transition-colors duration-200">Mark Paid</button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Walk-in Modal */}
      {isWalkinModalOpen && (
        <WalkinModal onClose={() => setIsWalkinModalOpen(false)} onAddWalkin={handleAddWalkin} />
      )}
    </div>
  );
};

const WalkinModal = ({ onClose, onAddWalkin }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [service, setService] = useState('');

  const services = [
    'Standard Haircut', 'Beard Trim', 'Haircut & Beard Trim', 'Kids Haircut'
  ];

  const handleSubmit = () => {
    if (name && phoneNumber && service) {
      onAddWalkin({ name, phoneNumber, service });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md space-y-4">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Add Walk-in Customer</h3>
        <input
          type="text"
          placeholder="Customer Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="">Select Service</option>
          {services.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        <div className="flex justify-end space-x-3 mt-4">
          <button onClick={onClose} className="px-5 py-2 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium">Cancel</button>
          <button onClick={handleSubmit} disabled={!name || !phoneNumber || !service} className="px-5 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white font-medium disabled:opacity-50">Add Customer</button>
        </div>
      </div>
    </div>
  );
};

// --- Screen 3: Shop Manager Dashboard ---
const ShopManagerDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [reportType, setReportType] = useState('daily_summary');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Dummy Data
  const summaryMetrics = {
    customersServedToday: 45,
    averageWaitTime: '12 mins',
    activeBarbers: 3,
  };

  const services = [
    { id: 's1', name: 'Standard Haircut', duration: 30, price: 150.00, active: true },
    { id: 's2', name: 'Beard Trim', duration: 15, price: 80.00, active: true },
    { id: 's3', name: 'Haircut & Beard Trim', duration: 45, price: 200.00, active: true },
    { id: 's4', name: 'Kids Haircut', duration: 20, price: 100.00, active: false },
  ];

  const staff = [
    { id: 'u1', name: 'John Barber', role: 'barber', franchise: 'Sandton', active: true },
    { id: 'u2', name: 'Jane Reception', role: 'receptionist', franchise: 'Sandton', active: true },
    { id: 'u3', name: 'Mike Manager', role: 'shop_manager', franchise: 'Sandton', active: true },
    { id: 'u4', name: 'Emily Styles', role: 'barber', franchise: 'Sandton', active: false },
  ];

  const handleGenerateReport = () => {
    console.log(`Generating ${reportType} report from ${startDate} to ${endDate}`);
    // In a real app, this would trigger an API call to GET /api/barbershops/{barbershop_id}/reports
    // and display the results.
  };

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-3xl font-extrabold text-center text-indigo-800 mb-6">Shop Manager Dashboard</h2>

      <div className="flex border-b border-gray-200 mb-6">
        {['overview', 'reports', 'settings'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 text-lg font-medium capitalize border-b-2 transition-colors duration-200 ${
              activeTab === tab ? 'border-indigo-600 text-indigo-700' : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.replace('_', ' ')}
          </button>
        ))}
      </div>

      {activeTab === 'overview' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-indigo-50 p-5 rounded-lg shadow-md border border-indigo-200 flex items-center justify-between">
              <div>
                <p className="text-sm text-indigo-700 font-medium">Customers Served Today</p>
                <p className="text-3xl font-bold text-indigo-800">{summaryMetrics.customersServedToday}</p>
              </div>
              <CheckCircle className="w-10 h-10 text-indigo-500" />
            </div>
            <div className="bg-green-50 p-5 rounded-lg shadow-md border border-green-200 flex items-center justify-between">
              <div>
                <p className="text-sm text-green-700 font-medium">Average Wait Time</p>
                <p className="text-3xl font-bold text-green-800">{summaryMetrics.averageWaitTime}</p>
              </div>
              <Clock className="w-10 h-10 text-green-500" />
            </div>
            <div className="bg-blue-50 p-5 rounded-lg shadow-md border border-blue-200 flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-700 font-medium">Active Barbers</p>
                <p className="text-3xl font-bold text-blue-800">{summaryMetrics.activeBarbers}</p>
              </div>
              <Scissors className="w-10 h-10 text-blue-500" />
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center"><ClipboardList className="mr-2" /> Live Queue Snapshot</h3>
            {/* Simplified queue view, similar to staff dashboard but read-only */}
            <div className="space-y-3">
              <div className="flex justify-between items-center bg-white p-3 rounded-md shadow-sm border border-gray-200">
                <span className="font-bold text-gray-800">#1</span>
                <span className="text-gray-700">Alice Smith (Haircut)</span>
                <span className="text-gray-600 text-sm">Waiting</span>
              </div>
              <div className="flex justify-between items-center bg-white p-3 rounded-md shadow-sm border border-gray-200">
                <span className="font-bold text-gray-800">#2</span>
                <span className="text-gray-700">Bob Johnson (Beard Trim)</span>
                <span className="text-gray-600 text-sm">In Service (Emily)</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center"><BarChart2 className="mr-2" /> Performance Charts (Placeholder)</h3>
            <div className="h-48 bg-gray-200 rounded-md flex items-center justify-center text-gray-500">
              <p>Hourly Customer Volume Chart</p>
            </div>
            <div className="h-48 bg-gray-200 rounded-md flex items-center justify-center text-gray-500 mt-4">
              <p>Service Popularity Trends Chart</p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'reports' && (
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg shadow-inner flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-grow w-full md:w-auto">
              <label htmlFor="reportType" className="block text-sm font-medium text-gray-700 mb-1">Report Type</label>
              <select
                id="reportType"
                value={reportType}
                onChange={(e) => setReportType(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="daily_summary">Daily Summary</option>
                <option value="weekly_performance">Weekly Performance</option>
                <option value="barber_utilization">Barber Utilization</option>
                <option value="service_demand">Service Demand</option>
              </select>
            </div>
            <div className="flex-grow w-full md:w-auto">
              <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
              <input
                type="date"
                id="startDate"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="flex-grow w-full md:w-auto">
              <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
              <input
                type="date"
                id="endDate"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <button
              onClick={handleGenerateReport}
              className="w-full md:w-auto mt-6 md:mt-0 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-md shadow-md transition-colors duration-200"
            >
              Generate Report
            </button>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Report Display Area (Placeholder)</h3>
            <div className="h-64 bg-gray-200 rounded-md flex items-center justify-center text-gray-500">
              <p>Generated report will appear here (tables, charts, etc.)</p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'settings' && (
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center"><Package className="mr-2" /> Manage Services</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg shadow-md">
                <thead>
                  <tr className="bg-gray-100 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                    <th className="px-4 py-3 rounded-tl-lg">Service Name</th>
                    <th className="px-4 py-3">Duration (min)</th>
                    <th className="px-4 py-3">Price (R)</th>
                    <th className="px-4 py-3 rounded-tr-lg">Active</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {services.map(service => (
                    <tr key={service.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{service.name}</td>
                      <td className="px-4 py-3 text-gray-700">{service.duration}</td>
                      <td className="px-4 py-3 text-gray-700">{service.price.toFixed(2)}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${service.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {service.active ? 'Yes' : 'No'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md shadow-md transition-colors duration-200">Add New Service</button>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center"><Briefcase className="mr-2" /> Manage Staff</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg shadow-md">
                <thead>
                  <tr className="bg-gray-100 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                    <th className="px-4 py-3 rounded-tl-lg">Name</th>
                    <th className="px-4 py-3">Role</th>
                    <th className="px-4 py-3">Franchise</th>
                    <th className="px-4 py-3 rounded-tr-lg">Active</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {staff.map(member => (
                    <tr key={member.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{member.name}</td>
                      <td className="px-4 py-3 text-gray-700 capitalize">{member.role.replace('_', ' ')}</td>
                      <td className="px-4 py-3 text-gray-700">{member.franchise}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${member.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {member.active ? 'Yes' : 'No'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md shadow-md transition-colors duration-200">Add New Staff</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
