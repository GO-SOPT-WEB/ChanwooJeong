function MainPage($container) {
  this.$container = $container;

  this.render = () => {
    this.$container.innerHTML = ` 
        <div id="mobileContainer">
        <header>
            <h1>❤️WEB TODO MATE❤️</h1>
        </header>
        <main>
            <section id="calendar">
                <div id="calendar-content">
                    <ul id="day-Week">
                        <li class="day">월</li>
                        <li class="day">화</li>
                        <li class="day">수</li>
                        <li class="day">목</li>
                        <li class="day">금</li>
                        <li class="day">토</li>
                        <li class="day">일</li>
                    </ul>
                    <ul id="todo-week">
                        <li class="dayBox">
                            <div class="heart">❤️
                                <div class="count">5</div>
                            </div>
                            <div>27</div>
                        </li>
                        <li class="dayBox">
                            <div class="heart">❤️
                                <div class="count">3</div>
                            </div>
                            <div>28</div>
                        </li>
                        <li class="dayBox">
                            <div class="heart">❤️
                                <div class="count">7</div>
                            </div>
                            <div>29</div>
                        </li>
                        <li class="dayBox">
                            <div class="heart">❤️
                                <div class="count">5</div>
                            </div>
                            <div>30</div>
                        </li>
                        <li class="dayBox">
                            <div class="heart">❤️
                                <div class="count">9</div>
                            </div>
                            <div>31</div>
                        </li>
                        <li class="dayBox">
                            <div class="heart">💜
                                <div class="count chageNum">{leftTodo}</div>
                            </div>
                            <div>1</div>
                        </li>
                        <li class="dayBox">
                            <div class="heart">❤️
                                <div class="count">3</div>
                            </div>
                            <div>2</div>
                        </li>
                    </ul>
                </div>
            </section>
            <section id="todoSection">
                
            </section>
        </main>
        <footer>
            <button type="button">
                <img src="https://cdn.icon-icons.com/icons2/1659/PNG/512/3844435-home-house_110321.png" alt="calendar"/>
                <div>달력</div>
            </button>
            <button type="button">
                <img src="https://cdn-icons-png.flaticon.com/512/880/880590.png" alt="My"/>
                <div>MY</div>
            </button>
        </footer>
        <div class="addTodoModal">
            <div class="addTodoModalContainer">
                <div class="exitIcon">&#10008;</div>
                <h2 id="categoryName">categoryName</h2>
                <input id="addTodoInput" placeholder="할일을 적어주세요🍀" autofocus/>
                <button id="addTodoBtn" type="submit">추가하기</button>
            </div>
        </div>
    </div>

    <template id="temp-todo" type="text/template">
        <article class="category">
            <h2 class="category-title {mainColor}">
                <div class="title">{todoCategory}</div>
                <button class="plusButton" type="button">+</button>
            </h2>
            <ul class="todoList">
                
            </ul>
        </article>
    </template>
  `;
  };
  this.render();
}

export default MainPage;
