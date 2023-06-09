
import React from 'react';
import { useQuery } from '@tanstack/react-query'

const StudentClass = () => {
    const { isLoading, isError, data, error, refetch } = useQuery({
        queryKey: ['studentsClass'],
        queryFn: async () => {
            const response = await fetch('http://localhost:5000/studentsClass')
            return response.json()
          },
      })
      return [data , isLoading , refetch]
};

export default StudentClass;