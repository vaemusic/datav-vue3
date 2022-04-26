<template>
  <div style="width:50rem;height:18rem;" p3 flex="~ " justify-center items-center bg-dark>
    <dv-border-box-5>
      <div w50rem h18rem color-white flex justify-center items-center>
        dv-border-box5
      </div>
    </dv-border-box-5>
  </div>
  <div text-2xl pt10>
    dv-border-box5(reverse)
  </div>
  <div style="width:50rem;height:18rem;" p3 flex="~ " justify-center items-center bg-dark>
    <dv-border-box-5 :reverse="true">
      <div w50rem h18rem color-white flex justify-center items-center>
        dv-border-box5
      </div>
    </dv-border-box-5>
  </div>
</template>
