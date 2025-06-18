import { useState } from "react"
import { Checkbox } from "./components/forms/Checkbox"
import { Input } from "./components/forms/Input"
import { ProductCategoryRow } from "./components/products/ProductCategoryRow"
import { ProductRow } from "./components/products/ProductRow"

const PRODUCTS = [  
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},  
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},  
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},  
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},  
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},  
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}  
]

function App() {
    const [showStock, setShowStock] = useState(false)
    const [search, setSearch] = useState('')

    const visibleProducts = PRODUCTS.filter(product => {
        if (showStock && !product.stocked) {
            return false
        }

        if (search && !product.name.includes(search)) {
            return false
        }

        return true
    })

    return <div className="container my-5">
        <SearchBar
            search={search}
            onSearch={setSearch}
            showStock={showStock}
            onStockChange={setShowStock}
        />

        <ProductTable products={visibleProducts} />
    </div>
}

function SearchBar({showStock, onStockChange, search, onSearch}) {
    return <div>
        <div className="mb-3">
            <Input
                value={search}
                onChange={onSearch}
                placeholder="Rechercher..."
            />

            <Checkbox 
                id="stocked"
                checked={showStock}
                onChange={onStockChange}
                label="Afficher les produits en stock"
            />
        </div>
    </div>
}

function ProductTable({products}) {
    const rows = []
    let lastCategory = null

    for (let product of products) {
        if (product.category !== lastCategory) {
            rows.push(<ProductCategoryRow key={product.category} name={product.category} />)
        }
        lastCategory = product.category
        rows.push(<ProductRow product={product} key={product.name} />)
    }

    return <table className="table">
        <thead className="text-uppercase">
            <tr>
                <th>Nom</th>
                <th>Prix</th>
            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
    </table>
}

export default App
