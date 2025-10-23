import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-50px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  const portfolioItems = [
    {
      id: 1,
      image: 'https://cdn.poehali.dev/projects/5c5b18d6-e070-4442-b593-68d94292e693/files/6a2a425a-0821-4c2c-b230-dbe740c89d54.jpg',
      title: 'Современная гостиная',
      category: 'Дизайн интерьера'
    },
    {
      id: 2,
      image: 'https://cdn.poehali.dev/projects/5c5b18d6-e070-4442-b593-68d94292e693/files/de338d3e-1609-43e7-b22c-8df1ef3a06a2.jpg',
      title: 'Минималистичная спальня',
      category: 'Визуализация'
    },
    {
      id: 3,
      image: 'https://cdn.poehali.dev/projects/5c5b18d6-e070-4442-b593-68d94292e693/files/bf347484-1f78-4811-8989-b7eb5f735427.jpg',
      title: 'Элегантная кухня',
      category: 'Дизайн мебели'
    }
  ];

  const services = [
    { icon: 'Home', title: 'Дизайн интерьера', description: 'Создание уникальных интерьерных решений' },
    { icon: 'Image', title: '3D визуализация', description: 'Реалистичная визуализация проектов' },
    { icon: 'Sofa', title: 'Дизайн мебели', description: 'Проектирование авторской мебели' },
    { icon: 'Palette', title: 'Цветовые схемы', description: 'Подбор идеальной цветовой палитры' }
  ];

  const team = [
    { name: 'Анна Иванова', role: 'Главный дизайнер', image: '👩‍🎨' },
    { name: 'Михаил Петров', role: '3D визуализатор', image: '👨‍💻' },
    { name: 'Елена Сидорова', role: 'Архитектор', image: '👩‍🔧' }
  ];

  const pricing = [
    { name: 'Базовый', price: '50 000 ₽', features: ['Планировка', 'Концепция', '2-3 визуализации'] },
    { name: 'Стандарт', price: '120 000 ₽', features: ['Планировка', 'Концепция', '5-7 визуализаций', 'Чертежи'] },
    { name: 'Премиум', price: '250 000 ₽', features: ['Полный проект', '10+ визуализаций', 'Чертежи', 'Авторский надзор'] }
  ];

  const process = [
    { step: '01', title: 'Встреча', description: 'Обсуждаем ваши пожелания и бюджет' },
    { step: '02', title: 'Концепция', description: 'Разрабатываем дизайн-концепцию' },
    { step: '03', title: 'Визуализация', description: 'Создаём 3D визуализации проекта' },
    { step: '04', title: 'Реализация', description: 'Поддержка на этапе воплощения' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/98 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-heading font-bold tracking-tight">Interior Design</h1>
            <div className="hidden md:flex gap-10">
              {['home', 'portfolio', 'services', 'team', 'process', 'pricing', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-base font-medium transition-all duration-300 hover:text-gold relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gold after:scale-x-0 after:transition-transform hover:after:scale-x-100 ${
                    activeSection === section ? 'text-gold after:scale-x-100' : 'text-gray-700'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'portfolio' && 'Портфолио'}
                  {section === 'services' && 'Услуги'}
                  {section === 'team' && 'Команда'}
                  {section === 'process' && 'Процесс'}
                  {section === 'pricing' && 'Тарифы'}
                  {section === 'contact' && 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6 min-h-screen flex items-center bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center">
            <div className="animate-slide-up">
              <h2 className="text-7xl md:text-8xl lg:text-9xl font-heading font-bold mb-10 leading-[0.95] tracking-tight">
                Создаём<br />пространства<br />
                <span className="italic text-gold animate-float inline-block">вашей мечты</span>
              </h2>
            </div>
            <p className="text-2xl md:text-3xl text-gray-600 mb-16 max-w-3xl mx-auto animate-fade-in font-light leading-relaxed" style={{ animationDelay: '300ms' }}>
              Профессиональная визуализация, дизайн интерьеров и авторская мебель
            </p>
            <div className="flex gap-6 justify-center flex-wrap animate-slide-up" style={{ animationDelay: '600ms' }}>
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="bg-primary text-white hover:bg-gold hover:scale-105 px-14 py-8 text-xl rounded-full shadow-2xl transition-all duration-500 hover:shadow-gold/50"
              >
                Начать проект
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection('portfolio')}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white hover:scale-105 px-14 py-8 text-xl rounded-full transition-all duration-500"
              >
                Смотреть работы
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-32 px-6 fade-section">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-6xl md:text-7xl font-heading font-bold mb-6 tracking-tight">Портфолио</h2>
            <p className="text-2xl text-gray-600 font-light">Избранные работы студии</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {portfolioItems.map((item, index) => (
              <Card 
                key={item.id} 
                className="group overflow-hidden border-0 shadow-xl hover:shadow-3xl transition-all duration-700 animate-scale-in rounded-3xl"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden aspect-[3/4]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-700">
                    <p className="text-base font-medium text-gold mb-3 tracking-wide uppercase">{item.category}</p>
                    <h3 className="text-3xl font-heading font-semibold">{item.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-32 px-6 bg-gray-50 fade-section">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-6xl md:text-7xl font-heading font-bold mb-6 tracking-tight">Услуги</h2>
            <p className="text-2xl text-gray-600 font-light">Полный спектр дизайнерских решений</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-10 text-center hover:shadow-2xl transition-all duration-500 border-0 rounded-3xl hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/10 mb-8 group-hover:scale-110 transition-transform">
                  <Icon name={service.icon} className="w-10 h-10 text-gold" />
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 text-lg font-light leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-32 px-6 fade-section">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-6xl md:text-7xl font-heading font-bold mb-6 tracking-tight">Наша команда</h2>
            <p className="text-2xl text-gray-600 font-light">Профессионалы своего дела</p>
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            {team.map((member, index) => (
              <div key={index} className="text-center animate-fade-in group" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-500 shadow-xl">
                  {member.image}
                </div>
                <h3 className="text-3xl font-heading font-semibold mb-3">{member.name}</h3>
                <p className="text-gold font-medium text-xl">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-32 px-6 bg-gray-50 fade-section">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-6xl md:text-7xl font-heading font-bold mb-6 tracking-tight">Процесс работы</h2>
            <p className="text-2xl text-gray-600 font-light">Как мы создаём проекты</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {process.map((item, index) => (
              <div key={index} className="relative animate-slide-right group" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="text-8xl font-heading font-bold text-gray-100 mb-6 group-hover:text-gold/20 transition-colors duration-500">{item.step}</div>
                <h3 className="text-3xl font-heading font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600 text-lg font-light leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-32 px-6 fade-section">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-6xl md:text-7xl font-heading font-bold mb-6 tracking-tight">Тарифы</h2>
            <p className="text-2xl text-gray-600 font-light">Выберите подходящий пакет услуг</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {pricing.map((plan, index) => (
              <Card 
                key={index} 
                className={`p-12 ${index === 1 ? 'border-2 border-gold shadow-2xl scale-105 bg-gradient-to-br from-white to-gold/5' : 'border-0 hover:shadow-2xl'} rounded-3xl transition-all duration-500 hover:-translate-y-2 animate-scale-in`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {index === 1 && (
                  <div className="inline-block px-6 py-2 bg-gold text-white text-base font-medium rounded-full mb-6 shadow-lg">
                    Популярный
                  </div>
                )}
                <h3 className="text-3xl font-heading font-bold mb-3">{plan.name}</h3>
                <div className="text-5xl font-heading font-bold mb-10 text-gold">{plan.price}</div>
                <ul className="space-y-5 mb-12">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <Icon name="Check" className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                      <span className="text-gray-600 text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full py-7 text-lg rounded-full shadow-lg transition-all duration-500 ${index === 1 ? 'bg-gold hover:bg-gold/90 hover:scale-105' : 'bg-primary hover:bg-gold hover:scale-105'}`}
                  onClick={() => scrollToSection('contact')}
                >
                  Выбрать тариф
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 px-6 bg-gradient-to-br from-gray-50 to-white fade-section">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-6xl md:text-7xl font-heading font-bold mb-6 tracking-tight">Свяжитесь с нами</h2>
            <p className="text-2xl text-gray-600 font-light">Готовы обсудить ваш проект</p>
          </div>
          <Card className="p-16 border-0 shadow-2xl rounded-3xl">
            <div className="grid md:grid-cols-2 gap-16">
              <div className="animate-slide-right">
                <h3 className="text-3xl font-heading font-semibold mb-10">Контакты</h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-5 group">
                    <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                      <Icon name="Phone" className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <p className="font-semibold mb-2 text-lg">Телефон</p>
                      <p className="text-gray-600 text-lg">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5 group">
                    <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                      <Icon name="Mail" className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <p className="font-semibold mb-2 text-lg">Email</p>
                      <p className="text-gray-600 text-lg">hello@studio.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5 group">
                    <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                      <Icon name="MapPin" className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <p className="font-semibold mb-2 text-lg">Адрес</p>
                      <p className="text-gray-600 text-lg">Москва, ул. Примерная, 1</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
                <form className="space-y-6">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full px-6 py-5 border-2 border-gray-200 rounded-full focus:border-gold outline-none transition-all text-lg"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-6 py-5 border-2 border-gray-200 rounded-full focus:border-gold outline-none transition-all text-lg"
                  />
                  <textarea
                    placeholder="Расскажите о вашем проекте"
                    rows={5}
                    className="w-full px-6 py-5 border-2 border-gray-200 rounded-3xl focus:border-gold outline-none transition-all resize-none text-lg"
                  />
                  <Button className="w-full bg-gold hover:bg-gold/90 hover:scale-105 text-white py-7 text-lg rounded-full shadow-xl transition-all duration-500">
                    Отправить сообщение
                  </Button>
                </form>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="bg-primary text-white py-16 px-6">
        <div className="container mx-auto max-w-7xl text-center">
          <h3 className="text-4xl font-heading font-bold mb-6">Interior Design Studio</h3>
          <p className="text-white/70 mb-10 text-xl font-light">Создаём пространства вашей мечты</p>
          <div className="flex justify-center gap-8 mb-10">
            <div className="w-12 h-12 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110">
              <Icon name="Instagram" className="w-6 h-6" />
            </div>
            <div className="w-12 h-12 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110">
              <Icon name="Facebook" className="w-6 h-6" />
            </div>
            <div className="w-12 h-12 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110">
              <Icon name="Mail" className="w-6 h-6" />
            </div>
          </div>
          <p className="text-white/50 text-base">© 2024 Interior Design Studio. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
