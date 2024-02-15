<!-- container -->
<div class="container mx-auto h-screen">
    <!-- left sidebar -->
    <div class="w-68 xs:w-88 xl:w-275 h-screen">
        <div class="flex flex-col h-screen xl:pr-3 fixed overflow-y-auto w-68 xs:w-88 xl:w-275">

        </div>
    </div>

    <!-- content -->
    <div class="w-full sm:w-600 h-screen">
        <slot />
    </div>

    <!-- right sidebar -->
    <div class="hidden md:block w-290 lg:w-350 h-screen">
        <div class="flex flex-col fixed overflow-y-auto w-290 lg:w-350 h-screen">
            
        </div>
    </div>
</div>