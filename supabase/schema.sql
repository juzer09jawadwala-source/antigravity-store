-- Supabase SQL Schema for Antigravity 2.0

-- 1. Products Table
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  model TEXT NOT NULL,
  storage TEXT NOT NULL,
  color TEXT NOT NULL,
  base_aed_price NUMERIC NOT NULL,
  india_mrp NUMERIC NOT NULL,
  stock_status TEXT DEFAULT 'In Stock',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Orders Table
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  razorpay_order_id TEXT UNIQUE NOT NULL,
  razorpay_payment_id TEXT UNIQUE,
  customer_name TEXT,
  customer_phone TEXT,
  customer_email TEXT,
  product_id UUID REFERENCES products(id),
  model_snapshot TEXT NOT NULL,
  storage_snapshot TEXT NOT NULL,
  color_snapshot TEXT NOT NULL,
  reservation_amount NUMERIC NOT NULL DEFAULT 5000,
  total_price_inr NUMERIC NOT NULL,
  status TEXT DEFAULT 'Pending' CHECK (status IN ('Pending', 'Reserved', 'Dispatched', 'Delivered', 'Cancelled')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Settings Table (for live exchange rates)
CREATE TABLE settings (
  id INT PRIMARY KEY DEFAULT 1,
  aed_to_inr_rate NUMERIC NOT NULL DEFAULT 22.85,
  logistics_fee_inr NUMERIC NOT NULL DEFAULT 5000,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default settings
INSERT INTO settings (id, aed_to_inr_rate, logistics_fee_inr) VALUES (1, 22.85, 5000);
