'use client';

import { Filter, Plus } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Sidebar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ទាំងអស់');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const subjects = ['ទាំងអស់', 'គណិតវិទ្យា', 'រូបវិទ្យា', 'គីមីវិទ្យា', 'ជីវវិទ្យា'];
  const categories = ['ទាំងអស់', 'បទពិសោធន៍', 'វិធីសាស្ត្ររៀន', 'រឿងរ៉ាវ', 'គន្លឹះ'];

  return (
    <>
      {/* Mobile/Tablet Secondary Bar */}
      <div className="lg:hidden fixed top-14 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-indigo-500/10 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <input
              type="text"
              placeholder="ស្វែងរកប្លុក..."
              className="w-full py-2 px-3 border border-indigo-500/20 rounded-lg text-sm bg-white/80 transition-all duration-300 focus:outline-none focus:border-indigo-600 focus:shadow-lg focus:shadow-indigo-500/10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {/* <button
            onClick={() => setShowFilters(!showFilters)}
            className="bg-indigo-600 text-white py-2 px-4 rounded-lg border-none text-sm cursor-pointer transition-all duration-300 hover:bg-indigo-700 flex items-center gap-2"
          >
            <Filter className="w-4 h-4" />
          </button> */}
          <Link href={"/me/create-blog"} className="bg-indigo-600 text-white py-2 px-4 rounded-lg border-none text-sm cursor-pointer transition-all duration-300 hover:bg-indigo-700 flex items-center gap-2">
            <Plus className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Mobile Filter Panel
      {showFilters && (
        <div className="lg:hidden fixed top-27 left-0 right-0 z-30 bg-white border-b border-indigo-500/10 shadow-lg">
          <div className="p-4 space-y-4">
            <div>
              <div className="font-semibold text-gray-900 mb-2 text-sm">ប្រភេទប្លុក</div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-3 py-1.5 rounded-lg text-xs transition-all duration-200 ${selectedCategory === category
                      ? 'bg-indigo-600 text-white font-medium'
                      : 'bg-gray-100 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'
                      }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="font-semibold text-gray-900 mb-2 text-sm">ប្រធានបទ</div>
              <div className="flex flex-wrap gap-2">
                {subjects.map((subject) => (
                  <button
                    key={subject}
                    className={`px-3 py-1.5 rounded-lg text-xs transition-all duration-200 ${selectedSubject === subject
                      ? 'bg-indigo-600 text-white font-medium'
                      : 'bg-gray-100 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'
                      }`}
                    onClick={() => setSelectedSubject(subject)}
                  >
                    {subject}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )} */}

      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-70 bg-white rounded-2xl p-6 shadow-lg shadow-indigo-500/10 border border-indigo-500/10 h-fit sticky top-20">
        <div className="mb-6">
          <h1 className="text-2xl font-extrabold mb-2 text-indigo-600">ប្លុក</h1>
          <p className="text-gray-500 text-sm">រឿងរ៉ាវ និងបទពិសោធន៍របស់សិស្ស</p>
        </div>

        <Link href={`/me/create-blog`} className="bg-indigo-600 text-white py-3 px-5 rounded-xl border-none font-semibold text-sm transition-all duration-300 shadow-lg shadow-indigo-500/30 mb-6 flex items-center justify-center gap-2 w-full hover:bg-indigo-700">
          <Plus className="w-4 h-4" /> សរសេរប្លុកថ្មី
        </Link>

        <div className="mb-6">
          <label htmlFor="search-input" className="block font-semibold text-gray-900 mb-2 text-sm">
            ស្វែងរក
          </label>
          <input
            type="text"
            id="search-input"
            className="w-full py-3 px-4 border border-indigo-500/20 rounded-xl text-sm bg-white/80 transition-all duration-300 focus:outline-none focus:border-indigo-600 focus:shadow-lg focus:shadow-indigo-500/10"
            placeholder="ស្វែងរកប្លុក..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        

        <div className="mb-6 opacity-50">
          <div className="font-bold text-gray-400 mb-3 text-sm">មុខវិជ្ជា</div>
          <div className="flex flex-col gap-2">
            {subjects.map((subject) => (
              <div
                key={subject}
                className="flex items-center gap-2 py-2 px-3 rounded-lg text-sm text-gray-400 cursor-not-allowed"
              >
                {subject}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6 opacity-50">
          <div className="font-bold text-gray-400 mb-3 text-sm">ប្រភេទ</div>
          <div className="flex flex-col gap-2">
            {categories.map((category) => (
              <div
                key={category}
                className="flex items-center gap-2 py-2 px-3 rounded-lg text-sm text-gray-400 cursor-not-allowed"
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
