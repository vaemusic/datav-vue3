<template>
  <div style="width:50rem;height:18rem;" p3 flex="~ " justify-center items-center bg-dark>
    <dv-border-box-4>
      <div w50rem h18rem color-white flex justify-center items-center>
        dv-border-box4
      </div>
    </dv-border-box-4>
  </div>
  <div text-2xl pt10>
    dv-border-box4(reverse)
  </div>
  <div style="width:50rem;height:18rem;" p3 flex="~ " justify-center items-center bg-dark>
    <dv-border-box-4 :reverse="true">
      <div w50rem h18rem color-white flex justify-center items-center>
        dv-border-box4
      </div>
    </dv-border-box-4>
  </div>
</template>
