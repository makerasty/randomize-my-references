<template>
    <div id="app" class="h-full">
        <header class="transition motion-reduce:transition-none bg-white dark:bg-gray-700 pt-12 px-8 md:px-12">
            <div class="flex flex-row flex-wrap justify-between">
                <div class="flex-none">
                    <h2 class="hidden sm:block transition motion-reduce:transition-none text-2xl font-bold dark:text-white">randomize <span class="text-primary dark:text-secondary">my references</span></h2>
                    <h2 class="block sm:hidden transition motion-reduce:transition-none text-2xl font-bold dark:text-white">r<span class="text-primary dark:text-secondary">mr</span></h2>
                </div>
                <div class="flex-none">
                    <label for="toggle" class="text-gray-700 dark:text-white transition motion-reduce:transition-none">
                        <svg width="16" height="16" class="inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </label>
                    <div class="relative inline-block w-10 mr-2 ml-2 align-middle select-none">
                        <input type="checkbox" name="toggle" id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-primary appearance-none cursor-pointer outline-none" v-model="darkMode" />
                        <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-primary cursor-pointer" @click="!darkMode"></label>
                    </div>
                    <label for="toggle" class="text-gray-700 dark:text-white transition motion-reduce:transition-none">
                        <svg width="16" height="16" class="inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    </label>
                </div>
            </div>
        </header>
        <main>
            <transition-group name="image" tag="div" class="flex flex-col md:flex-row flex-wrap justify-center content-center px-8 md:px-12 transition motion-reduce:transition-none bg-white dark:bg-gray-700" style="height: 65vh;">
                <div v-for="(cat, index) in categories" :key="cat.name" class="flex-1 h-full py-12 px-6">
                    <div class="flex flex-col justify-center content-center max-w-lg h-full p-4 mx-auto rounded border-2 border-primary dark:border-secondary text-primary dark:text-secondary border-dashed relative z-10">
                        <div v-if="$fetchState.pending" class="flex flex-col justify-center content-center h-full relative">
                            <svg width="48" height="48" class="animate-spin mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        </div>
                        <div v-else-if="$fetchState.error" class="flex flex-col justify-center content-center h-full relative">
                            <svg width="48" height="48" class="mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div v-else class="flex flex-col justify-center content-center h-full">
                            <div v-if="cat.img" class="text-center h-full">
                                <a :href="cat.url" target="_blank"><img :src="cat.img" :alt="cat.name" class="object-cover rounded w-full h-full" loading="lazy" /></a>
                            </div>
                            <div v-else class="text-center">
                                <svg width="48" height="48" class="mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </transition-group>
            <div class="container px-8 md:px-12 mx-auto relative z-10">
                <div v-if="results === false" class="flex flex-col sm:flex-row justify-center content-center transition motion-reduce:transition-none bg-white dark:bg-gray-700 rounded-md" style="box-shadow: rgba(0,0,0,0.01) 0px 1px 0px, rgba(0,0,0,0.025) 0px 0px 8px, rgba(0,0,0,0.075) 0px 20px 30px;">
                    <div class="flex-1 p-6">
                        <div class="flex flex-row flex-wrap flex-start rounded-md transition motion-reduce:transition-none bg-gray-100 dark:bg-gray-800 dark:placeholder-white dark:placeholder-opacity-50">
                            <div v-for="(cat, index) in categories" :key="cat.name" class="flex-0 bg-primary dark:bg-quaternary float-left rounded-full ml-3 mt-3 mb-3 py-1 px-3 text-white text-xs">{{ cat.name }}&nbsp;<span class="cursor-pointer" @click="delCategory(index)">×</span></div>
                            <input type="text" placeholder="Search for comma separated categories..." @keydown.enter="addCategory" @keydown.188="addCategory" @keydown.delete="delLastCategory" class="appearance-none dark:text-white w-auto flex-1 px-4 py-3 rounded-md bg-transparent focus:outline-none" />
                        </div>
                    </div>
                    <div class="flex-none px-6 pb-6 sm:pb-0 sm:px-0 sm:py-6 sm:pr-6">
                        <button class="appearance-none transition ease-in-out block w-full px-4 py-3 rounded-md focus:shadow-inner focus:outline-none focus:ring focus:ring-secondary hover:bg-tertiary bg-primary dark:bg-quaternary dark:hover:bg-secondary dark:focus:ring dark:focus:ring-tertiary text-white font-bold" @click="$fetch">Let's do it!</button>
                    </div>
                </div>
                <div v-else class="flex flex-col md:flex-row flex-wrap justify-center content-center transition motion-reduce:transition-none bg-white dark:bg-gray-700 dark:text-white rounded-md" style="box-shadow: rgba(0,0,0,0.01) 0px 1px 0px, rgba(0,0,0,0.025) 0px 0px 8px, rgba(0,0,0,0.075) 0px 20px 30px;">
                    <div class="flex-1 text-center p-6" style="line-height: 48px;">
                        Images are provided by <a href="https://pixabay.com" target="_blank"><img v-if="darkMode" src="~/assets/pixabay_light.png" alt="pixabay" class="inline transition motion-reduce:transition-none" loading="lazy" /><img v-else src="~/assets/pixabay_dark.png" alt="pixabay" class="inline transition motion-reduce:transition-none" loading="lazy" /></a>, click on them for full sized ones. You can <a href="#" @click="reloadForm">reload form</a> if you want to go for another spin.
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" class="transition motion-reduce:transition-none bg-white dark:bg-gray-700" style="width: 100%; margin-top: -12rem; height: 14rem; display: block;">
                <path class="wave" fill-opacity="1" d="M0,96L80,128C160,160,320,224,480,245.3C640,267,800,245,960,224C1120,203,1280,181,1360,170.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
            <div class="container grid grid-cols-1 xl:grid-cols-12 gap-12 p-8 md:p-12 text-justify mx-auto transition motion-reduce:transition-none dark:text-white">
                <div class="w-full col-span-full xl:col-span-8">
                    <p class="text-2xl mb-6">With the growing popularity of the “3 objects reference” challenge, we came up with an idea of a handy tool that will help choosing the references for drawing.</p>
                    <p class="text-xl mb-6">The origin of this challenge is to pick up objects which don't belong to the same category (e.g. jellyfish, old lamp and starry sky) and create a character design based on them. There are many variations of this exercise like creating a weapon based on high fashion for example. Usually you pick your references by yourself or base on some sets picked by other artists, but if you can’t decide - use this free generator!</p>
                    <p class="text-xl text-primary dark:text-secondary">Simply write down comma separated categories you want to choose from (e.g. people, mushroom, architecture) and let the fate decide! If you’re not satisfied with the results you can reroll once again.</p>
                </div>
                <div class="w-full col-span-full xl:col-span-4">
                    <blockquote class="bubble">
                        <p class="mb-4">If you wish to improve your drawing skill, remember to check out other reference generators like <a href="http://reference.sketchdaily.net/en" target="_blank">SketchDaily</a> which allows you to make quicker or longer studies, <a href="https://x6ud.github.io/#/" target="_blank">Animal Photo Reference</a> where you can find the animal faces based on skull positions or <a href="https://coolors.co/generate" target="_blank">Coolors</a> - the most amazing tool for creating color palettes.</p>
                        <p>Besides, it's really handy to create super-duper-inspirational boards on Pinterest, especially when you run out of ideas! You can check few of mines, like <a href="https://pl.pinterest.com/eljonek/pallettes/" target="_blank">Color Palettes</a> or <a href="https://pl.pinterest.com/eljonek/portrait-references/" target="_blank">Portrait References</a>.</p>
                        <img src="~/assets/eljonek.png" class="person" alt="person" loading="lazy" />
                        <cite class="absolute xl:hidden block text-lg not-italic" style="font-family: 'Inter', sans-serif; left: 6rem; bottom: -2.5rem;">Eljonek</cite>
                    </blockquote>
                </div>
            </div>
        </main>
        <footer class="text-center text-sm dark:text-white p-12">
            <a href="https://eljonek.art">she</a> brought the idea. <a href="https://rzeznicki.me">he</a> made it happen. <a href="https://github.com/makerasty/randomize-my-references">there</a> is source code.
        </footer>
    </div>
</template>

<script>
    export default {
        mounted() {
            (!localStorage.darkMode) ? localStorage.darkMode = false : this.darkMode = JSON.parse(localStorage.darkMode);
        },

        head() {
            return {
                htmlAttrs: {
                    class: this.darkMode ? 'dark' : 'light'
                }
            }
        },

        data() {
            return {
                darkMode: false,
                results: false,
                categories: [],
            }
        },

        watch: {
            darkMode() {
                localStorage.darkMode = JSON.stringify(this.darkMode);
            }
        },

        methods: {
            addCategory(e) {
                e.preventDefault();
                var value = e.target.value.trim();
                if (value.length > 0 && this.categories.findIndex(cat => cat.name === value) === -1 && this.categories.length < 5) {
                    this.categories.push({ name: value, img: null, url: null });
                    e.target.value = '';
                }
            },

            delCategory(index) {
                this.categories.splice(index, 1);
            },

            delLastCategory(e) {
                if (e.target.value.length === 0) {
                    this.delCategory(this.categories.length - 1);
                }
            },

            reloadForm() {
                this.results = false;
                this.categories.length = 0;
            }
        },

        async fetch() {
            for (var i = 0; i < this.categories.length; i++) {
                var data = await this.$http.$get(`https://pixabay.com/api/?key=${this.$config.pixaKEY}&q=${encodeURIComponent(this.categories[i].name)}&per_page=50&image_type=photo`);
                if (data.totalHits > 0) {
                    var randomPic;
                    if (data.totalHits <= 50) {
                        randomPic = Math.floor(Math.random() * data.totalHits);
                    } else {
                        randomPic = Math.floor(Math.random() * 50);
                    }
                    this.categories[i].img = data.hits[randomPic].webformatURL;
                    this.categories[i].url = data.hits[randomPic].pageURL;
                }
                this.results = true;
            }
        },

        fetchOnServer: false
    }
</script>