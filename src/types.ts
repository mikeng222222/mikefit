export interface Program {
  id: string;
  code: string;
  title: string;
  description: string;
  intensity: 'HIGH' | 'EXTREME' | 'KILLER';
  features: string[];
}

export interface ContactFormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  goal: string;
}

export interface Testimonial {
  id: number;
  name: string;
  quote: string;
  stat: string;
  role: string;
}
