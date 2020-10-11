import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './style'
import { Spinner } from './../Spinner'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true)
        const response = await window.fetch('https://petgram-server-edwin-dev.edwinbaeza05.now.sh/categories')
        const categoriesResponse = await response.json()
        setCategories(categoriesResponse)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.log('Error: ', error)
      }
    }
    fetchCategories()
  }, [])

  return { categories, loading }
}
export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = event => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        categories.map(
          category =>
            <Item key={category.id}>
              <Category {... category} path={ `/pet/${category.id}`}/>
            </Item>
        )
      }
    </List>
  )

  if (loading) {
    return <Spinner />
  }
  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
