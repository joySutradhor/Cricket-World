import React from 'react';
import { useQuery } from '@tanstack/react-query'

const InstructorClass = () => {
    const { isLoading, isError, data, error, refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const response = await fetch('http://localhost:5000/classes')
            return response.json()
          },
      })
      return [data , isLoading , refetch]
};

export default InstructorClass;