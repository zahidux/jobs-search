import {
    useQuery,
    
  } from '@tanstack/react-query'
 

const UseFeatures = () => {
    const { data: featuresData = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['featuresData'],
        queryFn: async () => {
            const res = await fetch('/jobs.json');
            const data = await res.json();
            return data;
        },
    });

    return [featuresData, loading, refetch];
};

export default UseFeatures;