'use client'
import React, { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { ArrowLeft, ArrowRight } from 'iconoir-react'

interface User {
    name: string
    pointsObtained: number
}

interface PointTableProps {
    users: User[]
    itemsPerPage?: number
}

export const PointTable: React.FC<PointTableProps> = ({
    users,
    itemsPerPage = 5,
}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredUsers, setFilteredUsers] = useState<User[]>([])
    const [sortedUsers, setSortedUsers] = useState<User[]>([])

    useEffect(() => {
        // Sort users by points in descending order
        const sorted = [...users].sort(
            (a, b) => b.pointsObtained - a.pointsObtained
        )
        setSortedUsers(sorted)

        // Filter users based on search term
        const filtered = sorted.filter((user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setFilteredUsers(filtered)
        setCurrentPage(1) // Reset to first page when search changes
    }, [searchTerm, users])

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentUsers = filteredUsers.slice(indexOfFirstItem, indexOfLastItem)

    const totalPages = Math.ceil(filteredUsers.length / itemsPerPage)

    const handleNextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
    }

    const handlePrevPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1))
    }

    const getUserRank = (user: User) => {
        return sortedUsers.findIndex((u) => u.name === user.name) + 1
    }

    return (
        sortedUsers.length > 0 && (
            <div className="flex justify-center items-center flex-col w-[390px]">
                <h2 className="text-2xl font-bold mb-2 text-white">
                    Leaderboard
                </h2>

                <Input
                    type="text"
                    placeholder="Filter by name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="mb-4 w-96 rounded-lg ring-transparent border-transparent"
                />
                <Table className="backdrop-blur-lg rounded-lg bg-white/5 text-white items-center justify-center w-96 h-full">
                    <TableCaption className="mb-4">
                        User Points Leaderboard
                    </TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[50px]">Rank</TableHead>
                            <TableHead className="w-[200px]">Name</TableHead>
                            <TableHead className="text-right">
                                Points Obtained
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {currentUsers.map((user) => (
                            <TableRow key={user.name}>
                                <TableCell className="font-medium">
                                    {getUserRank(user)}
                                </TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell className="text-right">
                                    {user.pointsObtained}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div className="flex justify-between mt-4 text-white w-fit gap-5">
                    <button
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                    >
                        <ArrowLeft />
                    </button>
                    <span>
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                    >
                        <ArrowRight />
                    </button>
                </div>
            </div>
        )
    )
}
