import {gql} from '@apollo/client/core';


const Query = {
    Products: {
        listProducts: gql`
            query {
                products: product {
                    id
                    name
                    onSale: on_sale
                    discount
                    comment
                    price
                    unit
                    available
                    category {
                        id
                        name
                        iconUrl: icon_url
                    }
                    assets {
                        id
                        url
                    }
                    owner {
                        id
                        lastName: last_name
                        firstName: first_name
                    }
                }
            }
        `,
        listProductCategories: gql`
            query {
                categories: product_category {
                    id
                    name
                    iconUrl: icon_url
                }
            }
        `,
        filterProducts: (categoryIds: string[], query?: string) => {
            const queryFilter = query ?
              `
                _or: [
                    {
                        name: {
                            _ilike: "%${query}%"
                        }
                    },
                    {
                        comment: {
                            _ilike: "%${query}%"
                        }
                    }
                ]
            ` :
              '';
            const categoryFilter = categoryIds.length > 0 ?
              `
                category_id: {
                    _in: [${categoryIds.map(id => '\"' + id + '\"').join(', ')}]
                }
            ` :
              '';
            const filter = `
            ${queryFilter}
            ${categoryFilter}
        `;
            return gql`
                query {
                    products: product(
                        where: {
                        ${filter}
                        }
                    ) {
                        id
                        name
                        onSale: on_sale
                        discount
                        comment
                        price
                        unit
                        available
                        category {
                            id
                            name
                            iconUrl: icon_url
                        }
                        assets {
                            id
                            url
                        }
                        owner {
                            id
                            lastName: last_name
                            firstName: first_name
                        }
                    }
                }
            `
        },
        productById: (id: string) => gql`
            query {
                products: product(where: {id: {_eq: "${id}"}}) {
                    id
                    name
                    onSale: on_sale
                    discount
                    comment
                    price
                    unit
                    available
                    category {
                        id
                        name
                        iconUrl: icon_url
                    }
                    assets {
                        id
                        url
                    }
                    owner {
                        id
                        lastName: last_name
                        firstName: first_name
                    }
                }
            }
        `,
    },
    Restaurants: {
        listRestaurants: gql`
            query {
                restaurants: restaurant {
                    id
                    name
                    address
                    openingHour: opening_hour
                    closingHour: closing_hour
                    assets {
                        id
                        url
                    }
                }
            }
        `,
        restaurantById: (id: string) => gql`
            query {
                restaurants: restaurant(
                    where: {
                        id: {
                            _eq: "${id}"
                        }
                    }
                ) {
                    id
                    name
                    address
                    openingHour: opening_hour
                    closingHour: closing_hour
                    assets {
                        id
                        url
                    }
                    menu {
                        id
                        items {
                            id
                            name
                            description
                            assetUrl: asset_url
                        }

                    }
                    owner {
                        id
                        firstName: first_name
                        lastName: last_name
                        email
                    }
                }
            }
        `,
    },
    Recipes: {
        listRecipes: gql`
            query {
                recipes: recipe {
                    id
                    name
                    assetUrl: asset_url
                    preparationTime: preparation_time
                    items {
                        id
                        name
                        unit
                        quantity
                    }
                }
            }
        `,
        recipeById: (id: string) => gql`
            query {
                recipes: recipe(
                    where: {
                        id: {
                            _eq: "${id}"
                        }
                    }
                ) {
                    id
                    name
                    assetUrl: asset_url
                    preparationTime: preparation_time
                    items {
                        id
                        name
                        unit
                        quantity
                    }
                }
            }
        `
    }
};


export default Query;
