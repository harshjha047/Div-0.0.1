import React from 'react'

function Order() {
  return (
    <div class="flex flex-col lg:flex-row lg:items-center justify-between items-center">
              <div>
                <p class="text-sm text-gray-400">Order #ABHI2025001234</p>
                <p class="text-white font-medium">Placed on August 25, 2025</p>
              </div>
              <div class="flex items-center space-x-4 mt-2 lg:mt-0">
                <span class="px-3 py-1 bg-green-600 text-white rounded-full text-sm">Delivered</span>
                <p class="text-white font-bold">₹34,998</p>
              </div>
            </div>
  )
}

export default Order