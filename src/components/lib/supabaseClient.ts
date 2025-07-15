// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hnajwlprmpiroickjbnk.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhuYWp3bHBybXBpcm9pY2tqYm5rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2MTQwNzgsImV4cCI6MjA2ODE5MDA3OH0.fQPLWhsEmDChWcjOYgSv6YXylYD7lGx4g-h5LiVfI8w';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
