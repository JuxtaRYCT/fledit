-- Create users table
CREATE TABLE public.users (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  email text UNIQUE NOT NULL,
  email_verified timestamp,
  hashed_password text
);

-- Create accounts table
CREATE TABLE public.accounts (
  id bigserial PRIMARY KEY,
  user_id uuid REFERENCES public.users (id) ON DELETE CASCADE,
  provider text NOT NULL,
  provider_account_id text NOT NULL,
  UNIQUE(provider, provider_account_id)
);

-- Create sessions table
CREATE TABLE public.sessions (
  id bigserial PRIMARY KEY,
  session_token text UNIQUE NOT NULL,
  user_id uuid REFERENCES public.users (id) ON DELETE CASCADE,
  expires timestamp NOT NULL
);

-- Create verification_tokens table
CREATE TABLE public.verification_tokens (
  token text PRIMARY KEY,
  identifier text NOT NULL,
  expires timestamp NOT NULL
);
