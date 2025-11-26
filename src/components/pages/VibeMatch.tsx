import { useState } from 'react';
import { ChevronRight, ChevronLeft, X, Check, Heart, MessageCircle, Clock, Sparkles, Moon, Sun, Music, Coffee } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

type Step = 'intro' | 'quiz' | 'swipe' | 'matches';

interface QuizAnswer {
  question: string;
  answer: string;
}

interface Roommate {
  id: string;
  name: string;
  age: number;
  course: string;
  college: string;
  image: string;
  compatibility: number;
  bio: string;
  habits: string[];
  sleepSchedule: string;
  cleanliness: number;
  studyPattern: string;
  interests: string[];
}

export function VibeMatch() {
  const [step, setStep] = useState<Step>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [currentSwipeIndex, setCurrentSwipeIndex] = useState(0);
  const [matches, setMatches] = useState<Roommate[]>([]);
  const [passed, setPassed] = useState<string[]>([]);

  const questions = [
    {
      question: 'What time do you usually go to bed?',
      options: ['Before 10 PM', '10 PM - 12 AM', '12 AM - 2 AM', 'After 2 AM'],
    },
    {
      question: 'What time do you usually wake up?',
      options: ['Before 6 AM', '6 AM - 8 AM', '8 AM - 10 AM', 'After 10 AM'],
    },
    {
      question: 'How would you rate your cleanliness?',
      options: ['Very organized', 'Pretty tidy', 'Somewhat messy', 'Very messy'],
    },
    {
      question: 'When do you prefer to study?',
      options: ['Early morning', 'Afternoon', 'Evening', 'Late night'],
    },
    {
      question: 'How social are you?',
      options: ['Very social - love guests', 'Moderately social', 'Prefer quiet', 'Very private'],
    },
    {
      question: 'Music while studying?',
      options: ['Yes, always', 'Sometimes', 'Rarely', 'Never - need silence'],
    },
    {
      question: 'Dietary preference?',
      options: ['Vegetarian', 'Non-vegetarian', 'Vegan', 'No preference'],
    },
  ];

  const potentialRoommates: Roommate[] = [
    {
      id: '1',
      name: 'Priya Sharma',
      age: 21,
      course: 'Computer Science',
      college: 'IIT Delhi',
      image: 'https://images.unsplash.com/photo-1561065533-316e3142d586?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHN0dWRlbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjQwOTg2MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      compatibility: 92,
      bio: 'Early bird who loves clean spaces. Looking for a studious roommate!',
      habits: ['Early riser', 'Organized', 'Quiet'],
      sleepSchedule: '10 PM - 6 AM',
      cleanliness: 9,
      studyPattern: 'Morning person',
      interests: ['Reading', 'Yoga', 'Cooking'],
    },
    {
      id: '2',
      name: 'Ananya Das',
      age: 20,
      course: 'Economics',
      college: 'DU',
      image: 'https://images.unsplash.com/photo-1561065533-316e3142d586?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHN0dWRlbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjQwOTg2MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      compatibility: 87,
      bio: 'Night owl, creative soul. Love music and good conversations!',
      habits: ['Night owl', 'Creative', 'Social'],
      sleepSchedule: '1 AM - 9 AM',
      cleanliness: 7,
      studyPattern: 'Night person',
      interests: ['Music', 'Art', 'Coffee'],
    },
    {
      id: '3',
      name: 'Sneha Reddy',
      age: 22,
      course: 'Medicine',
      college: 'AIIMS',
      image: 'https://images.unsplash.com/photo-1561065533-316e3142d586?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHN0dWRlbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjQwOTg2MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      compatibility: 78,
      bio: 'Balanced schedule, loves fitness and healthy living.',
      habits: ['Balanced', 'Fitness enthusiast', 'Disciplined'],
      sleepSchedule: '11 PM - 7 AM',
      cleanliness: 8,
      studyPattern: 'Flexible',
      interests: ['Gym', 'Healthy cooking', 'Netflix'],
    },
  ];

  const handleQuizAnswer = (answer: string) => {
    const newAnswers = [
      ...answers,
      { question: questions[currentQuestionIndex].question, answer },
    ];
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Quiz complete, move to swipe
      setStep('swipe');
    }
  };

  const handleSwipe = (direction: 'like' | 'pass') => {
    const currentRoommate = potentialRoommates[currentSwipeIndex];

    if (direction === 'like') {
      setMatches([...matches, currentRoommate]);
    } else {
      setPassed([...passed, currentRoommate.id]);
    }

    if (currentSwipeIndex < potentialRoommates.length - 1) {
      setCurrentSwipeIndex(currentSwipeIndex + 1);
    } else {
      // All swiped, show matches
      setStep('matches');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-yellow-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Intro Step */}
        {step === 'intro' && (
          <div className="text-center">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-gray-900 mb-4">Find Your Perfect Roommate Match</h1>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Answer a few quick questions about your habits and preferences, then swipe through potential roommates to find your perfect match!
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-3xl p-6 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-300 to-yellow-400 flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-gray-900 mb-2">Take Quiz</h3>
                <p className="text-sm text-gray-600">Tell us about your lifestyle and preferences</p>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-gray-900 mb-2">Swipe & Match</h3>
                <p className="text-sm text-gray-600">Browse through compatible roommates</p>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-300 to-yellow-400 flex items-center justify-center mx-auto mb-3">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-gray-900 mb-2">Connect</h3>
                <p className="text-sm text-gray-600">Start chatting with your matches</p>
              </div>
            </div>

            <button
              onClick={() => setStep('quiz')}
              className="px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white rounded-3xl transition-all inline-flex items-center gap-2"
            >
              Start Quiz
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Quiz Step */}
        {step === 'quiz' && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">
                    Question {currentQuestionIndex + 1} of {questions.length}
                  </span>
                  <button
                    onClick={() => {
                      if (currentQuestionIndex > 0) {
                        setCurrentQuestionIndex(currentQuestionIndex - 1);
                        setAnswers(answers.slice(0, -1));
                      }
                    }}
                    className="text-sm text-teal-600 hover:text-teal-700"
                  >
                    Back
                  </button>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-teal-400 to-teal-500 transition-all duration-300"
                    style={{
                      width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <h2 className="text-gray-900 mb-8">{questions[currentQuestionIndex].question}</h2>

              <div className="space-y-3">
                {questions[currentQuestionIndex].options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleQuizAnswer(option)}
                    className="w-full p-4 text-left rounded-2xl border-2 border-gray-200 hover:border-teal-400 hover:bg-teal-50 transition-all"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Swipe Step */}
        {step === 'swipe' && currentSwipeIndex < potentialRoommates.length && (
          <div className="max-w-md mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-gray-900 mb-2">Find Your Match</h2>
              <p className="text-gray-600">
                {potentialRoommates.length - currentSwipeIndex} profiles remaining
              </p>
            </div>

            <div className="relative">
              {/* Card */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="relative h-96">
                  <ImageWithFallback
                    src={potentialRoommates[currentSwipeIndex].image}
                    alt={potentialRoommates[currentSwipeIndex].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg">
                    <span className="text-teal-600">{potentialRoommates[currentSwipeIndex].compatibility}% Match</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-gray-900 mb-1">
                        {potentialRoommates[currentSwipeIndex].name}, {potentialRoommates[currentSwipeIndex].age}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {potentialRoommates[currentSwipeIndex].course} • {potentialRoommates[currentSwipeIndex].college}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{potentialRoommates[currentSwipeIndex].bio}</p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 rounded-2xl p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="w-4 h-4 text-teal-500" />
                        <span className="text-xs text-gray-500">Sleep Schedule</span>
                      </div>
                      <p className="text-sm text-gray-700">{potentialRoommates[currentSwipeIndex].sleepSchedule}</p>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Sparkles className="w-4 h-4 text-yellow-500" />
                        <span className="text-xs text-gray-500">Cleanliness</span>
                      </div>
                      <p className="text-sm text-gray-700">{potentialRoommates[currentSwipeIndex].cleanliness}/10</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-2">Interests</p>
                    <div className="flex flex-wrap gap-2">
                      {potentialRoommates[currentSwipeIndex].interests.map((interest) => (
                        <span key={interest} className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs">
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => handleSwipe('pass')}
                      className="flex-1 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-2xl transition-all flex items-center justify-center gap-2"
                    >
                      <X className="w-5 h-5" />
                      Pass
                    </button>
                    <button
                      onClick={() => handleSwipe('like')}
                      className="flex-1 py-4 bg-gradient-to-br from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600 text-white rounded-2xl transition-all flex items-center justify-center gap-2"
                    >
                      <Heart className="w-5 h-5" />
                      Like
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Matches Step */}
        {step === 'matches' && (
          <div>
            <div className="text-center mb-8">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-10 h-10 text-white fill-white" />
              </div>
              <h2 className="text-gray-900 mb-2">Your Matches</h2>
              <p className="text-gray-600">You have {matches.length} compatible roommate{matches.length !== 1 ? 's' : ''}!</p>
            </div>

            {matches.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 mb-6">No matches yet. Keep swiping to find your perfect roommate!</p>
                <button
                  onClick={() => {
                    setStep('intro');
                    setCurrentSwipeIndex(0);
                    setMatches([]);
                    setPassed([]);
                    setAnswers([]);
                    setCurrentQuestionIndex(0);
                  }}
                  className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-2xl transition-all"
                >
                  Start Over
                </button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {matches.map((match) => (
                  <div key={match.id} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                    <div className="relative h-64">
                      <ImageWithFallback
                        src={match.image}
                        alt={match.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg">
                        <span className="text-teal-600">{match.compatibility}% Match</span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-gray-900 mb-1">{match.name}, {match.age}</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {match.course} • {match.college}
                      </p>
                      <p className="text-sm text-gray-700 mb-4">{match.bio}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {match.habits.map((habit) => (
                          <span key={habit} className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-xs">
                            {habit}
                          </span>
                        ))}
                      </div>

                      <button className="w-full py-3 bg-gradient-to-br from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600 text-white rounded-2xl transition-all flex items-center justify-center gap-2">
                        <MessageCircle className="w-5 h-5" />
                        Send Message
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
