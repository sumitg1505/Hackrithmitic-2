import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <input type="checkbox" name="hbr" id="hbr" class="hbr peer" hidden aria-hidden="true" />
            <div class="z-20 w-full bg-white/90 dark:bg-gray-900/80 backdrop-blur navbar shadow-2xl shadow-gray-600/5 border-b border-gray-100 dark:border-gray-800 peer-checked:navbar-active dark:shadow-none">
                <div class="xl:container m-auto px-6 md:px-12 lg:px-6">
                    <div class="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0 lg:py-5">
                        <div class="w-full items-center flex justify-between lg:w-auto">
                            <Link to="/">
                                <h1 className='text-3xl text-white'>HomeworkHelp</h1>
                            </Link>
                            <label for="hbr" class="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden">
                                <div aria-hidden="true" class="m-auto h-0.5 w-5 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"></div>
                                <div aria-hidden="true" class="m-auto mt-2 h-0.5 w-5 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"></div>
                            </label>
                        </div>
                        <div class="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0">
                            <div class="text-gray-600 dark:text-gray-300 lg:pr-4">
                                <div class="space-y-6 tracking-wide font-medium text-base lg:text-sm lg:flex lg:space-y-0">
                                    <Link to="/">
                                        <span className='block md:px-4 transition text-lg'>Home</span>
                                    </Link>
                                    <Link to="/eqsolver">
                                        <span className='block md:px-4 transition text-lg'>Equation Solver</span>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
