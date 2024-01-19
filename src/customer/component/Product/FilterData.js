export const color = ['white', 'Black', 'Red', 'Marun', 'Being', 'Pink', 'Green', 'Yellow'];

export const filters = [
    {
        id: 'color',
        name: 'Color',
        options: [
            { value: 'white', label: 'White' },
            { value: 'beige', label: 'Beige' },
            { value: 'blue', label: 'Blue' },
            { value: 'brown', label: 'Brown' },
            { value: 'green', label: 'Green' },
            { value: 'purple', label: 'Purple' },
            { value: 'yellow', label: 'Yellow' },
        ],
    },

    {
        id: 'size',
        name: 'Size',
        options: [
            { value: 'S', label: 'S' },
            { value: 'M', label: 'M' },
            { value: 'L', label: 'L' },
            { value: 'XL', label: 'XL' },
        ],
    },
];

export const singleFilter = [
    {
        id: 'price',
        name: 'Price',
        options: [
            { value: '99.000-299.000', label: '99.000 To 299.000' },
            { value: '299.000-499.000', label: '299.000 To 499.000' },
            { value: '499.000-699.000', label: '499.000 To 699.000' },
            { value: '699.000-899.000', label: '699.000 To 899.000' },
            { value: '899.000-1099.000', label: '899.000 To 1099.000' },
        ],
    },
    {
        id: 'discount',
        name: 'Discount Range',
        options: [
            { value: '10', label: '10% trở lên' },
            { value: '20', label: '20% trở lên' },
            { value: '30', label: '30% trở lên' },
            { value: '40', label: '40% trở lên' },
            { value: '50', label: '50% trở lên' },
            { value: '60', label: '60% trở lên' },
            { value: '70', label: '70% trở lên' },
            { value: '80', label: '80% trở lên' },
        ],
    },
    {
        id: 'stock',
        name: 'Availability',
        options: [
            { value: 'in_stock', label: 'In stock' },
            { value: 'out_of_stock', label: 'Out of stock' },
        ],
    },
];
