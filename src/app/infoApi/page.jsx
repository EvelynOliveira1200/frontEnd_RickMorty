"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center p-6'>
      <div className='max-w-4xl bg-white p-8 rounded-xl shadow-2xl flex flex-col sm:flex-row items-center'>
        <Image 
          src="/image/perfil_img.jpeg" 
          alt="Logo" 
          layout="intrinsic" 
          width={200} 
          height={200} 
          className="block rounded-lg sm:mr-8" 
        />
        <div className="text-center sm:text-left">
          <h1 className='text-3xl font-bold bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text'>
            Bem-Vindo Rick And Morty API
          </h1>
          <ul className='mt-4 text-gray-700 list-disc list-inside'>
            <li>Evelyn Gonçalves de Oliveira</li>
            <li>18 anos</li>
            <li>Cursando Ensino Médio</li>
            <li>Técnico em desenvolvimento de software</li>
          </ul>
          <div className='flex flex-col sm:flex-row gap-5 mt-6 justify-center sm:justify-start'>
          </div>
        </div>
      </div>
    </div>
  )
}