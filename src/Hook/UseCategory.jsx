import {
    useQuery,
    
  } from '@tanstack/react-query'
 

const UseCategory = () => {
    const { data: categoryData = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['categoryData'],
        queryFn: async () => {
            const res = await fetch('/jobCategory.json');
            const data = await res.json();
            return data;
        },
    });

    return [categoryData, loading, refetch];
};

export default UseCategory;