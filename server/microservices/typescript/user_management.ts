
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
require('dotenv').config();

const supabaseUrl = 'https://bzwbfvuroqjyvuklzcur.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

interface User{
    id: string;
    name: string;
    email: string;
    password: string;
    payment_status: boolean;
}

