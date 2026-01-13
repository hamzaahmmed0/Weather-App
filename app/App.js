import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';

const API_KEY = '4f3bd1885f3682336cacb8430b905986';
const CITY = 'Lahore';

export default function App() {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchWeather();
    }, []);

    const fetchWeather = async () => {
        setLoading(true);
        setError(null);
        
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&appid=${API_KEY}`;
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error('Failed to fetch weather data');
            }

            const data = await response.json();
            setWeather(data);
        } catch (err) {
            setError(err.message);
            setWeather(null);
        } finally {
            setLoading(false);
        }
    };

    const getWeatherIcon = (temperature) => {
        if (temperature > 30) {
            return '☀️';
        } else if (temperature > 20) {
            return '⛅';
        } else {
            return '🌧️';
        }
    };

    const getBackgroundColor = (temperature) => {
        if (temperature > 25) {
            return '#FFE5B4';
        } else {
            return '#E3F2FD';
        }
    };

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#4A90E2" />
                <Text style={styles.loadingText}>Loading weather...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorIcon}>⚠️</Text>
                <Text style={styles.errorText}>{error}</Text>
                <TouchableOpacity style={styles.retryButton} onPress={fetchWeather}>
                    <Text style={styles.buttonText}>Retry</Text>
                </TouchableOpacity>
            </View>
        );
    }

    if (weather && weather.main) {
        const temperature = Math.round(weather.main.temp);
        const description = weather.weather[0].main;
        const cityName = weather.name;
        const feelsLike = Math.round(weather.main.feels_like);
        const humidity = weather.main.humidity;
        
        const weatherIcon = getWeatherIcon(temperature);
        const backgroundColor = getBackgroundColor(temperature);

        return (
            <View style={[styles.container, { backgroundColor: backgroundColor }]}>
                <Text style={styles.cityName}>{cityName}</Text>
                
                <Text style={styles.weatherIcon}>{weatherIcon}</Text>
                
                <Text style={styles.temperature}>{temperature}°C</Text>
                
                <Text style={styles.description}>{description}</Text>
                
                <View style={styles.detailsContainer}>
                    <Text style={styles.detailText}>Feels like: {feelsLike}°C</Text>
                    <Text style={styles.detailText}>Humidity: {humidity}%</Text>
                </View>

                <TouchableOpacity style={styles.refreshButton} onPress={fetchWeather}>
                    <Text style={styles.buttonText}>🔄 Refresh</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.errorText}>No data available</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    cityName: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    weatherIcon: {
        fontSize: 100,
        marginVertical: 20,
    },
    temperature: {
        fontSize: 72,
        fontWeight: 'bold',
        color: '#FF6B6B',
        marginBottom: 10,
    },
    description: {
        fontSize: 24,
        color: '#666',
        marginBottom: 20,
        textTransform: 'capitalize',
    },
    detailsContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
    },
    detailText: {
        fontSize: 16,
        color: '#444',
        marginVertical: 5,
    },
    refreshButton: {
        backgroundColor: '#4A90E2',
        paddingHorizontal: 30,
        paddingVertical: 12,
        borderRadius: 25,
        marginTop: 10,
    },
    retryButton: {
        backgroundColor: '#E74C3C',
        paddingHorizontal: 30,
        paddingVertical: 12,
        borderRadius: 25,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: '#666',
    },
    errorIcon: {
        fontSize: 60,
        marginBottom: 10,
    },
    errorText: {
        fontSize: 18,
        color: '#E74C3C',
        textAlign: 'center',
        marginHorizontal: 20,
    },
});