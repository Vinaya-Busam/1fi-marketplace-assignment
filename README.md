# 1Fi Marketplace

A responsive 1Fi Marketplace experience built as part of the assessment.

The project extends the existing Shop experience by introducing a dedicated Marketplace where users can browse products, search and filter products, view product details, select product variants, choose a no-cost EMI plan, and proceed through a demo confirmation flow.

## Features

- 1Fi-inspired Shop interface
- 1Fi Marketplace
- Product listing
- Product search
- Category filtering
- Product details
- Product variants
- Dynamic EMI plans
- EMI plan selection
- Order summary
- Demo order confirmation
- Loading, error and empty states
- Error handling
- Responsive design
- Client-side routing
- Mock API/service layer

## Tech Stack

- React
- Vite
- JavaScript
- React Router
- CSS

## Data & API Architecture

The project uses a mock service layer to simulate backend API communication.

Product-related operations are handled through:
`services/productService.js`

EMI-related operations are handled through:
`services/emiService.js`
 
This keeps product and EMI data separate from the UI components and makes it easier to replace the mock services with real backend APIs in the future.

## Application Flow

Shop → 1Fi Marketplace → Product Details → Select Variant → Select EMI Plan → Order Summary → Confirmation
