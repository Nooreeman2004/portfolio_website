'use client'

import { motion } from 'framer-motion'
import { certifications } from '@/constants'
import { Award, ExternalLink } from 'lucide-react'

export default function Certifications() {
    return (
        <section className="w-full py-16">
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-secondary font-mono text-sm mb-2">My Qualifications</p>
                    <h2 className="text-4xl font-bold text-white">Certifications</h2>
                </motion.div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.03 }}
                            className="bg-tertiary/40 backdrop-blur-sm p-6 rounded-2xl border border-secondary/20 hover:border-accent/40 transition-all duration-300 group"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-secondary/10 rounded-xl group-hover:bg-accent/10 transition-colors">
                                    <Award className="w-8 h-8 text-secondary group-hover:text-accent transition-colors" />
                                </div>
                                {cert && cert.link && cert.link !== '#' && (
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-secondary/50 hover:text-white transition-colors"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                )}
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                                {cert.title}
                            </h3>
                            <p className="text-secondary text-sm">
                                {cert.issuer}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
