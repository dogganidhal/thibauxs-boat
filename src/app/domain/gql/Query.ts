import {gql} from '@apollo/client/core';


const Query = {
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
    }
};


export default Query;
