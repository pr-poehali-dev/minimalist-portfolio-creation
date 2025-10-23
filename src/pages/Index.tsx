import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '-100px'
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
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-heading font-bold">INTERIOR DESIGN STUDIO</h1>
            <div className="hidden md:flex gap-8">
              {['home', 'portfolio', 'services', 'team', 'process', 'pricing', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-gold ${
                    activeSection === section ? 'text-gold' : 'text-gray-600'
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

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in">
            <h2 className="text-6xl md:text-7xl font-heading font-bold mb-6 leading-tight">
              Создаём пространства<br />вашей мечты
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Профессиональная визуализация, дизайн интерьеров и авторская мебель
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="bg-primary text-white hover:bg-primary/90 px-8 py-6 text-lg"
              >
                Начать проект
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection('portfolio')}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg transition-all"
              >
                Портфолио
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6 bg-gray-50 fade-section">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-heading font-bold text-center mb-4">Наши проекты</h2>
          <p className="text-center text-gray-600 mb-16">Избранные работы студии</p>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card 
                key={item.id} 
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-sm font-medium text-gold mb-2">{item.category}</p>
                    <h3 className="text-xl font-heading font-semibold">{item.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 fade-section">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-heading font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-gray-600 mb-16">Полный спектр дизайнерских решений</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-8 text-center hover:shadow-xl transition-all duration-300 border-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-6">
                  <Icon name={service.icon} className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-6 bg-gray-50 fade-section">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-heading font-bold text-center mb-4">Наша команда</h2>
          <p className="text-center text-gray-600 mb-16">Профессионалы своего дела</p>
          <div className="grid md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center text-6xl">
                  {member.image}
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-2">{member.name}</h3>
                <p className="text-gold font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-6 fade-section">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-heading font-bold text-center mb-4">Процесс работы</h2>
          <p className="text-center text-gray-600 mb-16">Как мы создаём проекты</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-6xl font-heading font-bold text-gray-100 mb-4">{item.step}</div>
                <h3 className="text-2xl font-heading font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-6 bg-gray-50 fade-section">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-heading font-bold text-center mb-4">Тарифы</h2>
          <p className="text-center text-gray-600 mb-16">Выберите подходящий пакет услуг</p>
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <Card 
                key={index} 
                className={`p-8 ${index === 1 ? 'border-2 border-gold shadow-xl scale-105' : 'border-0'} animate-scale-in`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {index === 1 && (
                  <div className="inline-block px-4 py-1 bg-gold text-white text-sm font-medium rounded-full mb-4">
                    Популярный
                  </div>
                )}
                <h3 className="text-2xl font-heading font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-heading font-bold mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Icon name="Check" className="w-5 h-5 text-gold mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${index === 1 ? 'bg-gold hover:bg-gold/90' : 'bg-primary hover:bg-primary/90'}`}
                  onClick={() => scrollToSection('contact')}
                >
                  Выбрать
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 fade-section">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-heading font-bold text-center mb-4">Свяжитесь с нами</h2>
          <p className="text-center text-gray-600 mb-16">Готовы обсудить ваш проект</p>
          <Card className="p-12 border-0 shadow-xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-heading font-semibold mb-6">Контактная информация</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" className="w-6 h-6 text-gold mt-1" />
                    <div>
                      <p className="font-medium mb-1">Телефон</p>
                      <p className="text-gray-600">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Mail" className="w-6 h-6 text-gold mt-1" />
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <p className="text-gray-600">hello@studio.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" className="w-6 h-6 text-gold mt-1" />
                    <div>
                      <p className="font-medium mb-1">Адрес</p>
                      <p className="text-gray-600">Москва, ул. Примерная, 1</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 border border-gray-200 focus:border-gold outline-none transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-200 focus:border-gold outline-none transition-colors"
                  />
                  <textarea
                    placeholder="Сообщение"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 focus:border-gold outline-none transition-colors resize-none"
                  />
                  <Button className="w-full bg-gold hover:bg-gold/90 text-white py-6">
                    Отправить сообщение
                  </Button>
                </form>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="bg-primary text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <h3 className="text-2xl font-heading font-bold mb-4">INTERIOR DESIGN STUDIO</h3>
          <p className="text-white/70 mb-6">Создаём пространства вашей мечты</p>
          <div className="flex justify-center gap-6">
            <Icon name="Instagram" className="w-6 h-6 cursor-pointer hover:text-gold transition-colors" />
            <Icon name="Facebook" className="w-6 h-6 cursor-pointer hover:text-gold transition-colors" />
            <Icon name="Mail" className="w-6 h-6 cursor-pointer hover:text-gold transition-colors" />
          </div>
          <p className="text-white/50 text-sm mt-8">© 2024 Interior Design Studio. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
