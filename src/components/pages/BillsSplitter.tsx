import { useState } from 'react';
import { Plus, Users, DollarSign, Zap, Droplet, Wifi, ShoppingCart, Trash2 } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface Roommate {
  id: string;
  name: string;
  color: string;
}

interface Bill {
  id: string;
  name: string;
  amount: number;
  icon: any;
  assignedTo: string[];
}

interface Expense {
  id: string;
  description: string;
  amount: number;
  paidBy: string;
  splitAmong: string[];
  date: string;
}

export function BillsSplitter() {
  const [roommates, setRoommates] = useState<Roommate[]>([
    { id: '1', name: 'You', color: '#14b8a6' },
    { id: '2', name: 'Priya', color: '#fbbf24' },
    { id: '3', name: 'Ananya', color: '#f97316' },
  ]);

  const [bills, setBills] = useState<Bill[]>([
    {
      id: '1',
      name: 'Electricity Bill',
      amount: 2400,
      icon: Zap,
      assignedTo: ['1', '2', '3'],
    },
    {
      id: '2',
      name: 'Water Bill',
      amount: 800,
      icon: Droplet,
      assignedTo: ['1', '2', '3'],
    },
    {
      id: '3',
      name: 'Wi-Fi Bill',
      amount: 1200,
      icon: Wifi,
      assignedTo: ['1', '2', '3'],
    },
    {
      id: '4',
      name: 'Grocery Expenses',
      amount: 3600,
      icon: ShoppingCart,
      assignedTo: ['1', '2', '3'],
    },
  ]);

  const [expenses, setExpenses] = useState<Expense[]>([
    {
      id: '1',
      description: 'Grocery shopping',
      amount: 1200,
      paidBy: '1',
      splitAmong: ['1', '2', '3'],
      date: '2025-11-20',
    },
    {
      id: '2',
      description: 'Electricity bill payment',
      amount: 2400,
      paidBy: '2',
      splitAmong: ['1', '2', '3'],
      date: '2025-11-18',
    },
  ]);

  const [showAddBill, setShowAddBill] = useState(false);
  const [showAddRoommate, setShowAddRoommate] = useState(false);

  const calculateSplit = (amount: number, assignedTo: string[]) => {
    return amount / assignedTo.length;
  };

  const getTotalByRoommate = () => {
    const totals: { [key: string]: number } = {};
    
    roommates.forEach((roommate) => {
      totals[roommate.id] = 0;
    });

    bills.forEach((bill) => {
      const splitAmount = calculateSplit(bill.amount, bill.assignedTo);
      bill.assignedTo.forEach((roommateId) => {
        totals[roommateId] += splitAmount;
      });
    });

    return totals;
  };

  const getChartData = () => {
    const totals = getTotalByRoommate();
    return roommates.map((roommate) => ({
      name: roommate.name,
      value: totals[roommate.id] || 0,
      color: roommate.color,
    }));
  };

  const totalExpenses = bills.reduce((sum, bill) => sum + bill.amount, 0);
  const totals = getTotalByRoommate();

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-gray-900 mb-2">Bills & Expenses Splitter</h1>
          <p className="text-gray-600">Manage and split household expenses with your roommates</p>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-teal-400 to-teal-500 rounded-3xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-teal-100">Total Expenses</span>
              <DollarSign className="w-6 h-6 text-teal-100" />
            </div>
            <p className="text-3xl">₹{totalExpenses.toLocaleString()}</p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Your Share</span>
              <Users className="w-6 h-6 text-teal-500" />
            </div>
            <p className="text-gray-900 text-3xl">₹{Math.round(totals['1'] || 0).toLocaleString()}</p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Active Bills</span>
              <Zap className="w-6 h-6 text-yellow-500" />
            </div>
            <p className="text-gray-900 text-3xl">{bills.length}</p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Roommates</span>
              <Users className="w-6 h-6 text-orange-500" />
            </div>
            <p className="text-gray-900 text-3xl">{roommates.length}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Bills List */}
          <div className="lg:col-span-2 space-y-6">
            {/* Bills */}
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-gray-900">Monthly Bills</h2>
                <button
                  onClick={() => setShowAddBill(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-2xl transition-all"
                >
                  <Plus className="w-4 h-4" />
                  Add Bill
                </button>
              </div>

              <div className="space-y-3">
                {bills.map((bill) => {
                  const Icon = bill.icon;
                  const splitAmount = calculateSplit(bill.amount, bill.assignedTo);

                  return (
                    <div
                      key={bill.id}
                      className="border border-gray-200 rounded-2xl p-4 hover:border-teal-300 transition-all"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-teal-600" />
                          </div>
                          <div>
                            <h3 className="text-gray-900">{bill.name}</h3>
                            <p className="text-sm text-gray-500">Split among {bill.assignedTo.length} people</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-gray-900">₹{bill.amount.toLocaleString()}</p>
                          <p className="text-sm text-teal-600">₹{Math.round(splitAmount)} each</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">Assigned to:</span>
                        <div className="flex gap-2">
                          {bill.assignedTo.map((roommateId) => {
                            const roommate = roommates.find((r) => r.id === roommateId);
                            return roommate ? (
                              <span
                                key={roommateId}
                                className="px-3 py-1 rounded-full text-xs"
                                style={{
                                  backgroundColor: roommate.color + '20',
                                  color: roommate.color,
                                }}
                              >
                                {roommate.name}
                              </span>
                            ) : null;
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h2 className="text-gray-900 mb-6">Recent Transactions</h2>
              
              <div className="space-y-3">
                {expenses.map((expense) => {
                  const paidBy = roommates.find((r) => r.id === expense.paidBy);
                  const splitAmount = expense.amount / expense.splitAmong.length;

                  return (
                    <div key={expense.id} className="border border-gray-200 rounded-2xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h3 className="text-gray-900">{expense.description}</h3>
                          <p className="text-sm text-gray-500">
                            Paid by {paidBy?.name} • {new Date(expense.date).toLocaleDateString()}
                          </p>
                        </div>
                        <p className="text-gray-900">₹{expense.amount.toLocaleString()}</p>
                      </div>
                      <p className="text-xs text-teal-600">₹{Math.round(splitAmount)} per person</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Chart & Roommates */}
          <div className="space-y-6">
            {/* Expense Distribution Chart */}
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h2 className="text-gray-900 mb-6">Expense Distribution</h2>
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={getChartData()}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {getChartData().map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value: number) => `₹${value.toFixed(0)}`} />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="space-y-2 mt-6">
                {roommates.map((roommate) => (
                  <div key={roommate.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: roommate.color }}
                      />
                      <span className="text-sm text-gray-700">{roommate.name}</span>
                    </div>
                    <span className="text-sm text-gray-900">₹{Math.round(totals[roommate.id] || 0)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Roommates List */}
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-gray-900">Roommates</h2>
                <button
                  onClick={() => setShowAddRoommate(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-white rounded-2xl transition-all"
                >
                  <Plus className="w-4 h-4" />
                  Add
                </button>
              </div>

              <div className="space-y-3">
                {roommates.map((roommate) => (
                  <div
                    key={roommate.id}
                    className="flex items-center justify-between p-3 rounded-2xl border border-gray-200"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                        style={{ backgroundColor: roommate.color }}
                      >
                        {roommate.name[0]}
                      </div>
                      <span className="text-gray-900">{roommate.name}</span>
                    </div>
                    <span className="text-sm text-gray-600">₹{Math.round(totals[roommate.id] || 0)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Settlement Summary */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-6 border border-yellow-200">
              <h3 className="text-gray-900 mb-4">Settlement Summary</h3>
              <p className="text-sm text-gray-600 mb-4">Based on current expenses:</p>
              
              <div className="space-y-2">
                {roommates.slice(1).map((roommate) => {
                  const yourShare = totals['1'];
                  const theirShare = totals[roommate.id];
                  const difference = theirShare - yourShare;

                  return (
                    <div key={roommate.id} className="text-sm">
                      {difference > 0 ? (
                        <p className="text-green-700">
                          {roommate.name} owes you ₹{Math.abs(Math.round(difference))}
                        </p>
                      ) : difference < 0 ? (
                        <p className="text-orange-700">
                          You owe {roommate.name} ₹{Math.abs(Math.round(difference))}
                        </p>
                      ) : (
                        <p className="text-gray-600">You're settled with {roommate.name}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
